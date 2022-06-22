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
      
}

document.addEventListener("DOMContentLoaded", init);
//dsada