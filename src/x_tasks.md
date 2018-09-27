#Features:
* Each task lists act as a card
* Swipeable cards
* Big checkboxes (might) that turns grey once completed
* Now: Alternating list item bg, pastel colors
* Done: Local Storage (if possible)
* Done: Search for items
* Done: Timestamps

#Bugs:
None yet :p

#Steps:
✅ Setup states, structures, defaultProps
✅ Add initial test framework
✅ Func. to add item
    * Testing!
    * Add 'Enter' button accessibility **DONE**
    * Add the component to Card comp.
      * Trigger displaying by [+] button bottom right
    * Udpate tests **DONE**
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
    * Adding toggle in search module
    * Test case
    * ~~Separate API and Selectors~~ -- can ignore for now
    * **BUGFIXED** Newly added items not affected
✅ Func. to delete item
  * Add [trash] button for each cards
  * Add handler
  * Tests
✅ Func. to search item
  * Write API filter **DONE**
  * API Tests **DONE**
  * Wire up function to module **DONE**
✅ Wire up timestamps data
  * Date.now() **DONE**
  * Time created **DONE**
  * Time completed **DONE**
✅ Wire up add item to local storeage
  * Writing get and set data function from local storage **DONE**
  * Updates Test App **DONE**
🔳 Optimize tests with mergeWithRequiredProps pattern
🔳 ~~NICE TO HAVE~~ Use Context API instead of prop drilling
🔳 (Optional) add some firebase hook (?)
🔳 Make it phreetheee and shyneee ✨
  * Moving styling to scss
