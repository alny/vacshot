import React, { Component } from 'react'

class Footer extends Component {
  render(){
    return(
      <div id="footer" role="contentinfo">
          <div id="footer-inner">
              <p>Copyright © 2017 VACshot</p>

              <p className="follow">
                  <a href="#"><img width="24" src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-twitter-1fa6921d96b16e47f00ad0381ebbab59ba089c22b21f9bce783c9a4a077f40e9.png" alt="Icon team twitter"/></a>
                  <a href="#"><img width="24" src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-facebook-4d63851997b88eb903858057327d93df9f950a55c5104a3a19206f2005682ea3.png" alt="Icon team facebook"/></a>
                  <a href="#"><img width="24" src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-instagram-5dfdcd1478ea4a1c1e109b32adbd3878062aa1eb571da63ac379e0da1d2d5762.png" alt="Icon team instagram"/></a>
                  <a href="#">
                      <img width="24" src="https://d13yacurqjgara.cloudfront.net/assets/icon-team-blog-2705adcb7ee6522051e175d10683208f0fa0ad17daa15fdf3f36aca99c540312.png" alt="Icon team blog"/>
                  </a>
              </p>
          </div>
      </div>
    )
  }
}

export default Footer
