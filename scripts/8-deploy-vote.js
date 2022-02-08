import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
  "0x2F91735cD95420042E393e340c9065F275cFfaDC",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "CarrotPersonDAO's Epic Proposals",

      // This is the location of our governance token, our ERC-20 contract!
        //make sure they use CarrotPerson to vote with 
      votingTokenAddress: "0x8D08B046ca1d7247BEe64365BC04Fbe32188961d",

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // makes it so one person can't vot on their  own proposal so X amount of tokens need to be used to allow a vote. Don't leave it at 0 because one person can force a vote
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();

//! node script/8-