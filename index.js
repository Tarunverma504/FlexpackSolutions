const el = document.getElementById('category');
const hiddenDiv = document.getElementById('categoryOptions');
el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';
  });
  
hiddenDiv.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';
  });

  function toggler(){

    const el = document.getElementById('category');
    const hiddenDiv = document.getElementById('categoryOptions');
      if(hiddenDiv.style.display == "block"){
        
        hiddenDiv.style.display = 'none';
      }
      else
        hiddenDiv.style.display = 'block';
  }