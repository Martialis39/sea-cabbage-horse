# Mart Lepanen, FE asssignment solution.

A bit of feedback from my side:

I managed to implement all the required functionality, with the most difficult proving to be drag and drop. I grokked it relying heavily on React DND. With regards to CSS, I ended up using `styled-components` which isn't strictly a pre/post processor (as requested) but I think/hope that's not an issue.

From the bonus tasks, I chose to tackle pagination first. I also added a button to the modal which deletes the user.

I saved the "save the custom order after drag and drop" for last, as I anticipated it might take me a while. The implementation that I ended up with is something that I wouldn't considered perfect, but I left it in anyway so that you could get an idea of my approach.

I used Create react app for a quick and easy starter.

Oh and I left the `.env.development` file with my API key in the repo on purpose, just so that all the API bits would work straight out of the box. I would not commit it in a real project :)

## How to run

Clone the repo, run `npm install` to install the dependencies.

In the project directory, you can run standard create-react-app commands, such as :

### `npm start`

to start a dev server.
