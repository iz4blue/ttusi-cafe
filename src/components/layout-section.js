import React from "react"
import SmallWide from "./item/small-wide";

export default ({ children }) => (
    <section>
      {children}
        <div>
          <SmallWide categoryText="Hot Coffees"/>
          <SmallWide categoryText="Hot Teas"/>
          <SmallWide categoryText="Hot Drinks"/>
          <SmallWide categoryText="Frappuccino® Blended Beverages"/>
        </div>
    </section>
)