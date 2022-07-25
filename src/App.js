import React, { Component } from "react";
import "./App.css";
import "tachyons";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Frame from "./components/frame/Frame";
import SignIn from "./components/signin/SignIn";
import Register from "./components/register/Register";

const USER_ID = "rehan210898";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "5461cff6d1494a22ab2bfb9ef3639094";
const APP_ID = "d52e76d17e324ea48e90daabfb5baf88";
const MODEL_ID = "face-detection";
const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";
const IMAGE_URL =
  "https://cdn.aarp.net/content/dam/aarp/entertainment/celebrities/2022/04/1140-dwayne-the-rock-johnson.imgcache.rev.web.900.517.jpg";
// Change this to whatever image URL you want to process

const particlesInit = async (main) => {
  await loadFull(main);
};
const particlesLoaded = (container) => {};
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: "",
      url: "",
      boxes: ["1"],
      route: "SignOut",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  faceBox = (data) => {
    const imagePosition = JSON.parse(simpleStringify=>(data){
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
}).outputs[0].data.regions;
    const image = document.getElementById("image");
    return imagePosition;
  };
  boxPosition = (boxes) => {
    this.setState({ boxes: boxes });
  };

  onButtonClick = (searchfield) => {
    this.setState({ url: searchfield });
    if (searchfield) {
      const raw = JSON.stringify({
        user_app_id: {
          user_id: USER_ID,
          app_id: APP_ID,
        },
        inputs: [
          {
            data: {
              image: {
                url: searchfield,
              },
            },
          },
        ],
      });

      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Key " + PAT,
        },
        body: raw,
      };

      fetch(
        "https://api.clarifai.com/v2/models/" +
          MODEL_ID +
          "/versions/" +
          MODEL_VERSION_ID +
          "/outputs",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          this.boxPosition(this.faceBox(result));
        })
        .catch((error) => console.log("error", error));
    }
  };
  render() {
    const { url, searchfield, route, boxes } = this.state;
    return (
      <div className="app">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Navigation route={route} routeChange={this.onRouteChange} />
        {this.state.route == "SignOut" ? (
          <SignIn routeChange={this.onRouteChange} />
        ) : this.state.route == "Register" ? (
          <Register routeChange={this.onRouteChange} />
        ) : (
          <div>
            <Logo />
            <ImageLinkForm
              onSearchChange={this.onSearchChange}
              onButtonClick={this.onButtonClick}
            />
            <Frame box={boxes} url={url} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
