import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, setNotVisibleSection }) => {

    //const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="border border-black p-2 m-2">
            <h1 className="text-xl font-bold">{title}</h1>
            {isVisible ? (
                <button
                    className="cursor-pointer underline" 
                    onClick={() => setNotVisibleSection()}
                >
                    Hide Description
                </button> 
            ) : (  
               <button 
                    className="cursor-pointer underline" 
                    onClick={() => setIsVisible()}
                >
                    Show Description
                </button>
            )}           
            { isVisible && <p>{description}</p>}
        </div>
    );
};

const InstaMart = () => {

    const [visibleSection, setIsVisibleSection, setNotVisibleSection] = useState("about");

    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
            <Section 
                title={"About InstaMart"} 
                description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"} 
                isVisible={visibleSection === "about"}
                setIsVisible={() => setIsVisibleSection("about")}
                setNotVisibleSection={() => setIsVisibleSection("")}
            />
            <Section 
                title={"Team of InstaMart"} 
                description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"} 
                isVisible={visibleSection === "team"}
                setIsVisible={() => setIsVisibleSection("team")}
                setNotVisibleSection={() => setIsVisibleSection("")}
            />
            <Section 
                title={"Careers"} 
                description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"} 
                isVisible={visibleSection === "career"}
                setIsVisible={() => setIsVisibleSection("career")}
                setNotVisibleSection={() => setIsVisibleSection("")}
            />
        </div>
    );
};

export default InstaMart;