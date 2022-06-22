// const section = document.querySelector(".SectionOne");

// const newSection = section.cloneNode(true);
// const secondSection = document.querySelector(".Section");


// // document.body.insertBefore(newSection, section.nextElementSibling)

// const newBoxes = document.body.appendChild(newSection);


// console.log(newBoxes.children)




// // document.body.insertBefore(newSection, section.nextElementSibling);

const init = function(){

  
    
    let t1, t2, div1, temp, div2, cln
    t1 = document.getElementById("target1");
    t2 = document.getElementById("target2");
    div1 = document.querySelector(".SectionOne");
  
    // t1.appendChild(div1.cloneNode(true))
  
  
  
      temp = document.querySelector(`[type="text/html"]`);
      cln = temp.cloneNode(true);
    
      div2 = cln.textContent;
      
      t2.innerHTML = div2;

      const section2 = document.querySelector(".SectionTwo")

      const nodeList = section2.children;

      let number = nodeList.length;

      const texts = [`${nodeList}`]
      let count = 0;
      let index = 0;
      let currentText = "";
      let letter = "";

      (function type(){

        if (count === texts.length){
          count = 0;
  
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index)

        NodeList.textContent = letter;
        if (letter.length === currentText.length){
          count++;
          index = 0;
        }

        setTimeout(type, 400)
      }())
     
}

document.addEventListener("DOMContentLoaded", init);
//dsada



// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";

// (function type(){

//   if(count === texts.length){
//     count = 0;
//   }
//   currentText = texts[count];
//   letter = currentText.slice(0, ++index);
//   //Basically, what this do is:
//   //letter = "w", than -> letter = "we" [...]

//   document.querySelector(".typing").textContent = letter;
//   if (letter.length === currentText.length){
//     count++; //Jumping to the next text, because the index of texts is based on this let
//     index = 0;
//   }
//   setTimeout(type, 400)
// }())

