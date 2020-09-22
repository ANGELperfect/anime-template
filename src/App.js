import React from 'react';
import './App.css';
import AnimeBg from './components/anime-bg'
import AnimeCover from './components/anime-cover'
import star from './star.png'
import fb from './facebook (1).png'
import tw from './twitter (1).png'

const App = () => { 

  function show (){
    var mr = document.querySelector('.more')
    mr.classList.toggle('active')
  }

  return (
    <div className="App">
      <AnimeBg/>
      <AnimeCover/>
      <div className="status"><h3>Finished</h3></div>
      <div className="watch">
        <div><h2>Watch</h2></div>
        <img src={star} alt="rate"/>
      </div>
      <div className="card-infos">
        <h1>Naruto Shippuden</h1>
        
        <div className="cat"><p>Action</p></div>
        <div className="rate">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="infos"><p><span>Author : </span>Masashi Kishimoto</p></div>
        <div className="infos"><p><span>Episodes : </span>500</p></div>
        <div className="infos"><p><span>Subtitles : </span>English</p></div>
      </div>
      <div className="desc">
        <p>
          <span>Description : </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris 
          vitae ultricies leo integer malesuada nunc vel risus .. 
          <span id="more" onClick={show}> show more </span>
        </p>
      </div>
      <div className="more">
        <h2>Description : </h2>
        <p id="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Facilisis sed odio morbi quis commodo odio aenean. Donec adipiscing tristique risus nec feugiat in fermentum posuere. In fermentum posuere urna nec tincidunt praesent semper. Sagittis eu volutpat odio facilisis mauris sit amet massa. Sit amet mauris commodo quis imperdiet. Ut tristique et egestas quis. Ut diam quam nulla porttitor massa. Lacus vestibulum sed arcu non odio euismod. In massa tempor nec feugiat nisl pretium fusce. Viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer quis. Vivamus arcu felis bibendum ut. Libero volutpat sed cras ornare arcu. Quis ipsum suspendisse ultrices gravida. Ut sem viverra aliquet eget sit.

          Vel pharetra vel turpis nunc eget. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Ut consequat semper viverra nam libero justo laoreet sit amet. Et molestie ac feugiat sed lectus vestibulum. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Eget egestas purus viverra accumsan in. Arcu odio ut sem nulla pharetra. Erat velit scelerisque in dictum non consectetur a erat nam. Sit amet facilisis magna etiam tempor orci eu lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum. Ipsum faucibus vitae aliquet nec ullamcorper. Fermentum iaculis eu non diam phasellus. Morbi tristique senectus et netus et malesuada fames. Arcu cursus vitae congue mauris rhoncus aenean vel. In aliquam sem fringilla ut morbi tincidunt.

          Fringilla ut morbi tincidunt augue interdum velit euismod in. Aliquam eleifend mi in nulla. Consectetur adipiscing elit pellentesque habitant morbi. Scelerisque purus semper eget duis. Lobortis elementum nibh tellus molestie nunc non blandit. Mauris sit amet massa vitae. Suspendisse sed nisi lacus sed viverra tellus in hac. A scelerisque purus semper eget duis at tellus at urna. Sed nisi lacus sed viverra tellus in hac habitasse platea. Nulla malesuada pellentesque elit eget gravida cum sociis. Quis blandit turpis cursus in hac habitasse.

          Fames ac turpis egestas sed. Arcu non sodales neque sodales ut etiam. Elementum eu facilisis sed odio morbi. Id diam maecenas ultricies mi eget. A condimentum vitae sapien pellentesque habitant morbi. At imperdiet dui accumsan sit amet nulla. Amet justo donec enim diam vulputate ut pharetra sit amet. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. In massa tempor nec feugiat nisl. Iaculis at erat pellentesque adipiscing commodo elit. Morbi tristique senectus et netus et malesuada fames. Pellentesque nec nam aliquam sem et tortor consequat.

          Porta lorem mollis aliquam ut porttitor. Integer eget aliquet nibh praesent tristique magna. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Nunc sed velit dignissim sodales ut eu. Suspendisse sed nisi lacus sed viverra. Sit amet tellus cras adipiscing. Id porta nibh venenatis cras sed. Eget nullam non nisi est. Congue eu consequat ac felis donec et odio pellentesque diam. Tellus at urna condimentum mattis pellentesque id. Vestibulum mattis ullamcorper velit sed. Nascetur ridiculus mus mauris vitae ultricies leo. Fames ac turpis egestas integer eget aliquet.

          Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Purus in massa tempor nec feugiat nisl pretium fusce. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Ultrices mi tempus imperdiet nulla. Quis commodo odio aenean sed. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Ultricies mi quis hendrerit dolor magna eget est. Duis at consectetur lorem donec. Viverra maecenas accumsan lacus vel facilisis volutpat. Egestas pretium aenean pharetra magna ac. Faucibus vitae aliquet nec ullamcorper sit. Scelerisque felis imperdiet proin fermentum.

          Lacus suspendisse faucibus interdum posuere. Volutpat commodo sed egestas egestas. Neque gravida in fermentum et. Sagittis eu volutpat odio facilisis mauris sit amet. Libero justo laoreet sit amet. Diam phasellus vestibulum lorem sed risus ultricies tristique. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Sed viverra tellus in hac habitasse. Consectetur a erat nam at lectus urna duis. Sed blandit libero volutpat sed cras. Elementum nibh tellus molestie nunc non. Quis viverra nibh cras pulvinar. Rhoncus mattis rhoncus urna neque viverra justo. Arcu non odio euismod lacinia at quis risus sed vulputate.

          Ornare arcu dui vivamus arcu felis. Condimentum lacinia quis vel eros donec ac. Id consectetur purus ut faucibus pulvinar elementum integer. Consequat ac felis donec et odio. Gravida quis blandit turpis cursus in. Neque vitae tempus quam pellentesque nec. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Tristique nulla aliquet enim tortor at. Urna nunc id cursus metus aliquam eleifend mi.

          Lacus suspendisse faucibus interdum posuere lorem. Et leo duis ut diam quam nulla porttitor massa id. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Sed faucibus turpis in eu mi bibendum neque egestas congue. Urna condimentum mattis pellentesque id nibh tortor id. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Lacus laoreet non curabitur gravida. Semper feugiat nibh sed pulvinar. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Tempor nec feugiat nisl pretium fusce id velit. Pellentesque habitant morbi tristique senectus et netus. Laoreet suspendisse interdum consectetur libero. Accumsan in nisl nisi scelerisque eu. Convallis posuere morbi leo urna molestie at. Elit ut aliquam purus sit amet luctus venenatis lectus. Quis blandit turpis cursus in hac. Amet luctus venenatis lectus magna fringilla urna. Nulla facilisi morbi tempus iaculis urna id. Cursus sit amet dictum sit amet justo donec enim. Mauris vitae ultricies leo integer malesuada nunc vel risus.
          </p>
          <p id="back" onClick={show}>Back</p>
      </div>
      <div className="footer">
        <p>Follow Us</p>
        <img src={tw} alt="twitter"/>
        <img src={fb} alt="facebook"/>
      </div>
    </div>
  );
}

export default App;
