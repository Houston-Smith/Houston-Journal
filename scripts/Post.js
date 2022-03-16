export const Post = (postObject) => {
  return `
    <section class="post">
      <header>
          <h2 class="post__title">${postObject.ConceptCovered}</h2>
      </header>
      <h3 class="post__date">Date: ${postObject.entryDate}</h3>
      <h3 class="post__mood">Mood: ${postObject.dailyMood}</h3>
      <h5 class="post__entry">Entry: ${postObject.JournalEntry}</h3>
    </section>
  `
}