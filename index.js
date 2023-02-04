const el = document.getElementById('category');
const hiddenDiv = document.getElementById('categoryOptions');
el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';
  
    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'visible';
  });
  

  // ✅ (optionally) Hide DIV on mouse out
  hiddenDiv.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';
  
    // 👇️ if you used visibility property to hide the div
    // hiddenDiv.style.visibility = 'hidden';
  });