
  
import { NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchDefault } from '@angular/common';
import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
constructor(){}
ngOnInit():void{}
title = "Display the content with one way binding";
//string interpolation
slogan: string ="i am string interpolation";
getSlogan(){
return "i am string interpolation from a method"
}
//property binding
display :boolean=true;
onClick(){
this.display=false;
}
//event binding

}



/*
// topic-1   ONE WAY AND TWO WAY DATA BINDING

1>>> one way data binding --in one way data binding data flows in one direction i.e from comp to temp
 or temp to compo.

// * string interpolation:{{data}}
// * property binding: [property]="data"
// * event binding:(data)="expression or method"

 a) property binding -property binding is used to bind the property of an html element to the property
  or method of a component class. using property binding we can bind the attribute of an html element to the property
 or method of a component class.
b) event binding--

/*

Topic-2   DIRECTIVES of angular
>> directives are classes that add new behavior to the elements in the template.
   basically directives are used to manipulate the dom fr ex: adding or removing the elements from the DOM 
   or changing the appearance of the DOM element.
>> directives has the capacity to do the dom manipulation 
(DOM-document object model)



                       component directive
types---------------   custom directive 
                       structural Directive        
                       attribute directive

   component directive 

   >>A component is a directive with template.
   @component decorator is a @directive decorator with template-oriented
    features.
   >>component also manipulate the dom by adding major things like how we usually do.
   >> modifying the content                  

 1- custom directive -


 2-structural Directive
 >> This type of directive is used to make changes in the layout of the DOM.
 >>Elements can be added or removed or replaced, hence changing the structure of the DOM or html structure.

 >>Types

 *ngIf(adding or removing element from DOM) -- used to add or remove the elements


 *ngFor(lists elements of every iteration) -- is a structural directive that renders a template for each item in a collection
 >>it is a repeater directive that iterates over a collection of data.
 >> the directive is placed on an element ,which becomes the parent of the cloned template.
 
 *ngSwitch(replacing)
 >>conditionally renders HTML elements.
 >>we cannot have more than one SD on one single element.

3-attribute directive 
attribute directives deals with changing behaviour of the html element
>>
--------------------------------------------------------------------------------

NgClass---used to apply styles on condition
--The ngClass directive will take an expression that will be used to determine
which state styles to apply at a given time to the styled element.
The expression passed on to ngClass can be:
an object
an array
a string

Passing a configuration object to ngClass
The last and most commonly used way that we can configure ngClass is by passing it an object:

**the keys of that object are the names of the CSS classes that we want to apply (or not)
and the values of the configuration object should be booleans (or an expression that evaluates to a boolean) 
that indicate if the CSS class should be applied
<p>Passing a configuration object:</p>
<button [ngClass]="{ btn:true, 'btn-primary':true }">
  Button
</button>


>>styles for identifying the currently selected elements of a list

<p>Passing an Array of classes:</p>
<button [ngClass]="['btn', 'btn-primary']">Button</button>


--------------------------------------------------------------------------------------------------
 ngStyle-- built-in core directive, when we need embedded HTML style we go for ngStyle.
 <p>Passing an object to ngStyle:</p>
<button [ngStyle]="{background: 'red'}">Button</button>

<p>Obtaining styles from a component method:</p>
<button [ngStyle]="calculateStyles()">Button</button> 
-------------------------------------------------------------------

ng-hide---The ng-hide directive hides the HTML element if the expression evaluates to true.
<element ng-hide="expression"></element>

TOPIC-3 LAZY LOADING

Design pattern -- where the modules are loaded when requested

app-routing.module.ts
const routes: Routes = [
  {path:"admin",loadChildren:()=>import('./module/admin/admin.module').then(mod=>mod.AdminModule)}
];

admin-routing.module.ts
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'list',component:ListComponent}
  
];






each type what it is how it is gng to manipulate in angular
*NgIf
*NgFor
*NgHide
NgClass
NgStyle
NgSwitch
*/

