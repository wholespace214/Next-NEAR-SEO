import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa"
import Data from "./data.json";
import * as Hammer from "hammerjs";
import Image from "next/image";
import Back from "../../../assets/image/arrowback.png";
import Next from "../../../assets/image/arrownext.png";
import { RoadMapOut, RoadMapHeader, RectIcon, Item, EachArrowBtn, RectCard, CheckIcon, Description, CheckCard, ArrowI, RoadMapHeaderLeft, ArrowBtn, GoLetter } from "./roadmap.style";


export default function RoadMap() {
  const [data, setData] = useState(Data);
  useEffect(() => {
    const timeline = document.querySelector(".timeline ol"),
      elH = document.querySelectorAll(".timeline li > div"),
      arrows = document.querySelectorAll(".timeline .arrows .arrow"),
      arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
      arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
      firstItem = document.querySelector(".timeline li:first-child"),
      lastItem = document.querySelector(".timeline li:nth-last-child(2)"),
      xScrolling = 250,
      disabledClass = "disabled";

    // START
    window.addEventListener("load", init);

    function init() {
      setEqualHeights(elH);
      animateTl(xScrolling, arrows, timeline);
      setSwipeFn(timeline, arrowPrev, arrowNext);
      setKeyboardFn(arrowPrev, arrowNext);
    }

    // SET EQUAL HEIGHTS
    function setEqualHeights(el) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        const singleHeight = el[i].offsetHeight;

        if (counter < singleHeight) {
          counter = singleHeight;
        }
      }

      for (let i = 0; i < el.length; i++) {
        el[i].style.height = `${counter}px`;
      }
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // SET STATE OF PREV/NEXT ARROWS
    function setBtnState(el, flag = true) {
      if (flag) {
        el.classList.add(disabledClass);
      } else {
        if (el.classList.contains(disabledClass)) {
          el.classList.remove(disabledClass);
        }
        el.disabled = false;
      }
    }

    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function () {
          if (!arrowPrev.disabled) {
            arrowPrev.disabled = true;
          }
          if (!arrowNext.disabled) {
            arrowNext.disabled = true;
          }
          const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
          if (counter === 0) {
            tl.style.transform = `translateX(-${scrolling}px)`;
          } else {
            const tlStyle = getComputedStyle(tl);
            // add more browser prefixes if needed here
            const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
            const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
            // if (counter < 10)
            tl.style.transform = `translateX(${values}px)`;
          }

          setTimeout(() => {
            isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
            isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
          }, 200);

          counter++;
        });
      } ``
    }

    // ADD SWIPE SUPPORT FOR TOUCH DEVICES
    function setSwipeFn(tl, prev, next) {
      const hammer = Hammer(tl);
      hammer.on("swipeleft", () => next.click());
      hammer.on("swiperight", () => prev.click());
    }

    // ADD BASIC KEYBOARD FUNCTIONALITY
    function setKeyboardFn(prev, next) {
      document.addEventListener("keydown", (e) => {
        if ((e.which === 37) || (e.which === 39)) {
          const timelineOfTop = timeline.offsetTop;
          const y = window.pageYOffset;
          if (timelineOfTop !== y) {
            window.scrollTo(0, timelineOfTop);
          }
          if (e.which === 37) {
            prev.click();
          } else if (e.which === 39) {
            next.click();
          }
        }
      });
    }
  }, [])

  return (
    <RoadMapOut>
      <section className="timeline">
        <RoadMapHeader>
          <RoadMapHeaderLeft>
            The &nbsp;<GoLetter>Go</GoLetter>near roadmap
          </RoadMapHeaderLeft>
          <ArrowBtn className="arrows">
            <button className="arrow arrow__prev disabled" disabled>
              <Image src={Back} alt="prev timeline arrow" width={50} height={50} />
            </button>
            <button className="arrow arrow__next" >
              <Image src={Next} alt="next timeline arrow" width={50} height={50} />
            </button>
          </ArrowBtn>
        </RoadMapHeader>
        <ol>
          {data.map((v, k) => {
            return <li key={k}>
              {v.type == 'checkicon' ? <div className="slider-checker-badge"><FaCheck size={10} /></div> : <div className="slider-date-badge">{v.num}</div>}
              <div>
                {v.name}
              </div>
            </li>
          })}
          <li />
        </ol>


      </section>
    </RoadMapOut >
  );
}
