import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import HTML5Backend from "react-dnd-html5-backend";

function ListItem({ id, index, text, moveCard }) {
  const ref = useRef(null);
  const [collectedProps, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div
      ref={ref}
      style={{
        opacity: opacity,
        height: "40px",
        width: "200px",
        marginBottom: "10px",
        backgroundColor: "tomato"
      }}
    >
      {text}
    </div>
  );
}

function List() {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Write a cool JS library"
    },
    {
      id: 2,
      text: "Make it generic enough"
    },
    {
      id: 3,
      text: "Write README"
    },
    {
      id: 4,
      text: "Create some examples"
    },
    {
      id: 5,
      text:
        "Spam in Twitter and IRC to promote it (note that this element is taller than the others)"
    },
    {
      id: 6,
      text: "???"
    },
    {
      id: 7,
      text: "PROFIT"
    }
  ]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      console.log("ran");
      console.log(dragIndex, hoverIndex);
      const dragCard = cards[dragIndex];
      const newCards = cards.slice();
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);
      setCards(newCards);
    },
    [cards]
  );

  const renderCard = (element, index) => {
    return (
      <ListItem
        key={element.id}
        index={index}
        id={element.id}
        text={element.text}
        moveCard={moveCard}
      />
    );
  };
  return cards.map((element, index) => renderCard(element, index));
}

function Test() {
  return (
    <DndProvider backend={HTML5Backend}>
      <List />
    </DndProvider>
  );
}

export default Test;
