import React, { useState } from "react";
import "./Value.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../Utils/accordion"
const Value = () => {
  return (
    <section className="v-wrapper container">
      <div className="paddings innerWidth flexCenter v-container">
        {/* leftSide */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="priaryText">Value WE Give To You</span>
          <span className="secondaryText">
            we alwys ready to help by prviding the best services for you.
            <br />
            we beleive a good Place to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, idx) => {
                const [className, setClassName] = useState(null)
              return (
                <AccordionItem className={`accordionItem ${className}`} key={idx} uuid={idx}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton flexCenter">
                   <AccordionItemState>
                    {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                   </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20}/>

                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">
                        {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
