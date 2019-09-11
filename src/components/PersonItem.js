import React, { useRef } from "react";
import icon_organization from "../assets/icon_organization.svg";
import PersonItemModal from "./PersonItemModal";
import { StyledPersonItem } from "./PersonItem.style";

import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../constants";

function PersonItem(props) {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
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
      props.moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id: props.id, index: props.index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.5 : 1;
  drag(drop(ref));

  const imagePlaceholder =
    props.first_char.toUpperCase() + props.last_name.slice(0, 1);

  return (
    <StyledPersonItem
      ref={ref}
      style={{ opacity: opacity }}
      onClick={() => {
        props.setModalRender(() => {
          return function() {
            return (
              <PersonItemModal
                setModalRender={props.setModalRender}
                handleDelete={props.delete}
                {...props}
              />
            );
          };
        });
      }}
    >
      <div className="info">
        <div className="name">
          <p>{props.name}</p>
        </div>
        <div className="company">
          <div className="icon">
            <img src={icon_organization} alt="" />
          </div>
          {props.org_name}
        </div>
      </div>
      <div className="image">{imagePlaceholder}</div>
    </StyledPersonItem>
  );
}

export default PersonItem;
