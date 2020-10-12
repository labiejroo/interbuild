//react
import React from "react";

class SmoothScroll {
  constructor() {}

  static handleScrollEvent(name) {
    console.log("jestem tu kurwa 1" + name);
    this.scrollTo(name);
  }

  handleScrollEvent = (name) => {
    console.log("jestem tu kurwa 2");
  };

  stop = () => {
    clearTimeout(this.timer);
  };

  static scrollTo = (id, callback) => {
    var timer = 0;
    var settings = {
      duration: 1000,
      easing: {
        outQuint: function (x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };
    var percentage;
    var startTime;
    var node = document.getElementById(id);
    console.log(node);
    var nodeTop = node.offsetTop;
    var nodeHeight = node.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    var windowHeight = window.innerHeight;
    var offset = window.pageYOffset;
    var delta = nodeTop - offset;
    var bottomScrollableY = height - windowHeight;
    var targetY =
      bottomScrollableY < delta
        ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
        : delta;

    startTime = Date.now();
    percentage = 0;

    if (timer) {
      clearInterval(this.timer);
    }

    function step() {
      var yScroll;
      var elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(
          0,
          elapsed,
          offset,
          targetY,
          settings.duration
        );
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    timer = setTimeout(step, 10);
  };
}

export default SmoothScroll;
