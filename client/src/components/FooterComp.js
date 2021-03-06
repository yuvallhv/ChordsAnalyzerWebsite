import React from 'react'
import '../design/css/styles.css';

const FooterComp  = (props) =>
{
    return(
        <React.Fragment>


<footer class="footer-section">

  <p class="copyrights-text">© 2020 Created by Chaim Hadad & Yuval Lahav</p>
  <p class="copyrights-text">This project is part of Digital Humanities course by guidance of Dr. Yael Netzer At Ben Gurion University</p>
  <p class="copyrights-text">
    The data for the creation of this website was taken from 
    <a class="footer-link" href="https://www.tab4u.com/"> Tab4u</a>
    , images were taken from 
    <a class="footer-link" href="https://www.pinterest.com/"> Pinterest</a>
  </p>
</footer>
</React.Fragment>
    ) 
}

export default FooterComp