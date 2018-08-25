#Features:
* Each task lists act as a card
* Swipeable cards
* Big checkboxes (might) that turns grey once completed
* Alternating list item bg, pastel colors
* Local Storage (if possible)
* Search for items
* Timestamps

#Bugs:
None yet :p

#Steps:
✅ Setup states, structures, defaultProps
✅ Add initial test framework
🔳 Func. to add item -- *NOW*
✅ Func. to toggle item
    * File `components/Todo.js`
    * Try to pass down toggle method using Context API
    * Cool and all, but need to pass card and item ID 🤔
      * Need to pass it on each level, Card and Item 🤦
    ✅ Test file!
     ✅ mock values and setup function
✅ Move Todo mock data to an API
✅ Func, to show/hide completed
    * Use Array.filter function
    * Prev. proj. sample: TodoAPI.jsx
🔳 Func. to search item
🔳 Wire up timestamps data
🔳 Wire up add item to local storeage
🔳 (Optional) add some firebase hook (?)
🔳 Make it phreetheee and shyneee ✨
