# Project Name
Landing Page

# Requirements
1.Navigation is built dynamically as an unordered list .  (Done)
2.It should be clear which section is being viewed while scrolling through the page.  (Done)
3.When clicking an item from the navigation menu, the link should scroll to the appropriate section.
(Done)
## Project Technologies
1. Html
2. Css
3. Java Script
## APIS, and Methods used:
    (build nav methods) 
1.document.queryselectorAll();  
 2.document.getElementByid();    <!-- Define and modify the item by identifier  -->
3.forEach();           <!--  looping over all sections  -->
4.document.createDocumentFragment();      <!-- Creates and returns a new object. --> 
5.document.creatElement();
6.appendChild();    <!-- adding a link to the list  -->
7.getAttribute();
8.scrollIntoView({behavior:'smooth'});      <!-- (smooth scroll) -->

    (Active section Methods)
1.document.queryselectorAll();
2.forEach();
 3.getBoundingClinetRect();  <!--Using getBoundingClientRect to find the dimensions of the rectangle surrounding the section -->
 4.classList.remove();  <!--remove the active section -->
 5.classList.add();     <!-- adding the active section -->
6.getAttribute();

