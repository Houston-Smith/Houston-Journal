import { EntryListComponent } from "./JournalEntryList.js";
import { getPosts, getUsers } from "./DataManager.js"
import { PostList } from "./PostList.js"
import { Post } from "./Post.js";
import { createPost } from "./DataManager.js";

const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const applicationElement = document.querySelector(".daily-journal");

const startGiffyGram = () => {
	showPostList();
}

applicationElement.addEventListener("click", event => {
  if (event.target.id === "newPost__cancel") {
      //clear the input fields
  }
})

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id === "SubmitBTN") {
  //collect the input values into an object to post to the DB
    const date = document.querySelector("input[name='journalDate']").value
    const concept = document.querySelector("input[name='journalConcepts']").value
    const entry = document.querySelector("input[name='journalEntry']").value
    const mood = document.querySelector("select[name='mood']").value
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    const postObject = {
        entryDate: date,
        ConceptCovered: concept,
        JournalEntry: entry,
        dailyMood: mood,
        userId: 1,
        timestamp: Date.now()
    }

  // be sure to import from the DataManager
      createPost(postObject)
  }
})

startGiffyGram();

EntryListComponent()