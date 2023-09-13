import React, { useState } from "react";
import { token } from "../../../declarations/token";
// import { AuthClient } from "@dfinity/auth-client";


// need to add props to faucet function for auth
function Faucet() {

  const [isDisabled, setDisabled] = useState(false);
const [buttonText, setText] =useState("Gimme, Gimme");

  async function handleClick(event) {
    setDisabled(true);

//     const authClient = await AuthClient.create();
//     const identity = await authClient.getIdentity();

// const authenticatedCanister = createActor(canisterId, {
//   agentOptions: {
//     identity,
//   },
// });
//     const result = await authenticatedCanister.payOut();
//    swap this line for one below when implementing internet identity auth

    const result = await token.payOut();
   setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free NIKI tokens here! Claim 10,000 NIKI coins to your account.</label>
      <p className="trade-buttons">
        <button disabled={isDisabled} id="btn-payout" onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
