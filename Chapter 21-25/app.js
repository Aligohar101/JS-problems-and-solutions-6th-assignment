// Task1
// var f_name=prompt("Enter first name: ");
// var l_name=prompt("Enter last name: ");
// alert("Hello "+f_name+" "+l_name);

// Task2
// var inp=prompt("Enter your favourite mobile phone model: ");
// document.write("My favourite phone is: "+inp+"</br>");
// document.write("length of string is: "+inp.length);

// task3
// var str="Pakistan";
// document.write("String: "+str+"</br>");
// document.write("Index of n is: "+str.indexOf("n"));

// Task4
// var str="Hello World";
// document.write("String: "+str+"</br>");
// var var_slice=str.indexOf("rl");
// document.write("Last index of l is: "+(var_slice+1));

// Task5
// var str="Pakistani";
// document.write("String: "+str+"</br>");
// document.write("Character at index 3 is: "+(str[3]));

// Task6
// var f_name=prompt("Enter first name: ");
// var l_name=prompt("Enter last name: ");
// var result=" ";
// alert(result.concat(f_name,result,l_name));

// Task7
// var str="Hyderabad";
// document.write("City: "+str+"</br>");
// for(var i=0; i<str.length; i++){
//     if(str.slice(i,i+5)==="Hyder"){
//         var new_city="Islam"
//         document.write("After replacement: "+new_city+str.slice(i+5));
//         break;
//     }
// }

// Task 8
// var str="Ali and Sami are best friends. They play cricket and football together."
// var str1=str.slice(0,30);
// var str2=str.slice(30,71);
// var new_str1=str1.replace("and","&");
// var new_str2=str2.replace("and","&");
// document.write(new_str1+" "+new_str2);

// Task9
// var str="472";
// document.write("Value: "+str+"</br>")
// document.write("Type: "+typeof(str)+"</br>");
// var int=parseInt(str);
// document.write("Value: "+int+"</br>");
// document.write("Type: "+typeof(int));

// Task10
// var str="peanuts";
// document.write("User data: "+str+"</br>");
// var str_new=str.toUpperCase();
// document.write("Upper case: "+str_new+"</br>");

// Task11
// var str="javascript";
// document.write("User data: "+str+"</br>");
// var str_new=str.slice(0,1).toUpperCase();
// document.write("Upper case: "+str_new+str.slice(1));

// task 12
// var str="35.36";
// document.write("Number: "+str+"</br>");
// var str_new=str.replace(".","");
// document.write("Result: "+str_new);

// Task13
// var data=prompt("Enter username");
// for(var i=0; i<data.length; i++){
//     if(data[i]==='@' || data[i]==='.' || data[i]==='!' ){
//         alert("Enter valid username");
//         break
//     }
// }

// Task14
// var data=prompt("Enter the item")
// var item=["cake", "apple pie", "cookie", "chips", "patties"];
// for(var i=0; i<item.length; i++){
//     if(data.toLowerCase()===item[i]){
//         alert(data+" is available at index "+i+" in our bakery");
//         break;
//     }
//     else{
//         alert("We are sorry. "+data+" is not available in our bakery");
//         break;
//     }
// }

// Task 15
// var data=prompt("Enter your password");
// if(data.slice(0,1)===)

// Task 16
// var str="University of Karachi";
// var arr=str.split(splitter="");
// for(var i=0; i<str.length; i++){
//     document.write(arr[i]+"</br>");
// }

// Task 17
// var str=prompt("Enter input: ");
// document.write("User input: "+str+"</br>");
// var x=str.length;
// document.write("Last character of input: "+str[x-1]);

// Task18
// var str="The quick brown fox jumps over the lazy dog";
// var str_new=str.toLowerCase();
// var count=0;
// for(var i=0; i<str_new.length; i++){
//     if(str_new.slice(i,i+3)=='the'){
//         count=count+1;
//         continue;
//     }
// }
// document.write("Text: The quick brown fox jumps over the lazy dog"+"</br>");
// document.write("There are "+count+" occurence(s) of word 'the'");