import React from "react";
import "./meaning.css";

const MeaningResponse = ({ meaning }) => {
    return (
        <article className="center mw5 mw6-ns hidden ba mv4">
            <div className="pa3 bt">
                <p className="f6 f5-ns lh-copy measure mv0">
                    {meaning}
                </p>
            </div>
        </article>
    );
}

export default MeaningResponse;