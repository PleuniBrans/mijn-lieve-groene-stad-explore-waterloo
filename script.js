const menuToggle = () => {
    const linksElement = document.querySelector('#nav-links');
    if (linksElement.style.display === 'block') {
      linksElement.style.display = 'none';
    } else {
      linksElement.style.display = 'block';
    }
  }