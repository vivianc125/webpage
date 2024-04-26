<script setup lang="ts">
import testImage from '../components/images/shiro-test.jpeg'
import githubIcon from '../components/images/github-icon.png'
import linkedIcon from '../components/images/linkedin-icon.png'

</script>

<template>
  <main>
    <div class="stars-container" id = "top">
      <div class="head-template">
          <div class="sparkle" style="top: 10%; left: 15%;"></div>
          <div class="sparkle" style="top: 20%; left: 72%;"></div>
          <div class="sparkle" style="top: 25%; left: 34%;"></div>
          <div class="sparkle" style="top: 30%; left: 50%;"></div>
          <div class="sparkle" style="top: 42%; left: 95%;"></div>
          <div class="sparkle" style="top: 50%; left: 55%;"></div>
          <div class="sparkle" style="top: 60%; left: 12%;"></div>
          <div class="sparkle" style="top: 70%; left: 35%;"></div>
          <div class="sparkle" style="top: 85%; left: 75%;"></div>
          <div class="sparkle" style="top: 90%; left: 15%;"></div>
          <div class="move-page">
            <a href="#bottom" class="move-page">
              <i class="bi bi-chevron-double-down" id=""></i> 
            </a>
          </div>
        <div class="intro">
          <b-row>
            <h1>welcome!</h1>
            <p>student. web developer. enthusiast of cute things.</p>
          </b-row>
          <b-row>
            <img class="myImage" :src="testImage">
          </b-row>
        </div>

      </div>

    </div>

    <div class="head-template" id="bottom">
      <div class="bottom">
        <b-row>
          <div class="about">
            <h1>it's nice to meet you!</h1>
            <p>my name is vivian chen, and i am a senior at the university of houston.</p>
            <p>my favorite passtimes are listening to true-crime documentaries and spending time with my wonderful pup, charli!</p>
            <a href="/about">learn more about me >></a>
          </div>

          <b-container class="link-nav">
            <b-row>
             <b-col>
              <a href="https://github.com/vivianc125">
                <img class="links" src="../components/images/github-icon.png" > 
              </a>
            </b-col> 
             <b-col>
              <a  href="https://www.linkedin.com/in/vivian-chen1287/">
                <img class="links" :src="linkedIcon">
              </a>
            </b-col> 
            </b-row>
          </b-container>
        </b-row>
      </div>
    </div>
  </main>
</template>


<style>
.head-template{
  margin:10px;
  background-color:#c3d0fb;
}
.intro{
  margin:10px;
  display:flex;
  justify-content:space-around;
  height:80vh;
  align-items:center;
}

.move-page{
  position: absolute;
  top:80%;
  left:50%;
}
.bi-chevron-double-down {
    color: #000; 
    font-size: 30px; 
    cursor: pointer; 
    transition: transform 0.3s ease;
    display: inline-block; 
}

.bi-chevron-double-down:hover{
  transform: translateY(-10px);
  color: #555; /* Darken the icon to provide visual feedback */
}
.bottom{
  margin:10px;
  display:flex;
  justify-content:space-around;
  height:97vh;
  align-items:center;
}

.about{
  width:100%;
}

.links{
  height:50px;
  margin:5px;
}

.link-nav{
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin:15px;
}

.myImage{
  height:250px;
}

  .stars-container {
      position: relative;
      width: 100%;
      height: 100%;
      
  }

  .sparkle {
    position: absolute;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, white, transparent 70%);
    border-radius: 50%;  /* Ensures the central part is circular */
    animation: twinkle 3s infinite alternate ease-in-out;
}

@keyframes twinkle {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Curved corners with rotation */
.sparkle::before, .sparkle::after {
    content: '';
    position: absolute;
    top: -50%; /* Position adjustment */
    left: -50%; /* Position adjustment */
    width: 200%; /* Larger to cover the entire area */
    height: 200%; /* Larger to cover the entire area */
    background: radial-gradient(square, rgba(255, 255, 255, 0.6), transparent 50%);
    border-radius: 15px; /* Rounded corners for the squares */
    opacity: 0.7;
}

.sparkle::before {
    transform: rotate(45deg); /* Diagonal rotation */
}

.sparkle::after {
    transform: rotate(-45deg); /* Opposite diagonal rotation */
}



</style>
