import React, { useState } from "react"
import "./Value.css"
import data from "../../utils/accordion"
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

import "react-accessible-accordion/dist/fancy-example.css"

import { MdOutlineArrowDropDown } from "react-icons/md"

const Value = () => {
  return (
    <section className="value-wrapper">
      <div className="paddings innerWidth flexCenter value-container">
        {/* Left */}
        <div className="value-left">
          <div className="image-container">
            <img src="./value.png" alt="House" />
          </div>
        </div>
        {/* Right */}
        <div className="flexColStart value-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null)
              return (
                <AccordionItem
                  key={i}
                  className={`accordionItem  ${className}`}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton ">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter ">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
