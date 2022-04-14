app.directive("targetOffers", function() {
 adobe.target.getOffers({
  // decisioningMethod: "hybrid",
  request: {
    prefetch: {
      mboxes: [
        {
          index: 0,
          name: "local-decisioning-mbox" //<div id="group1">
        },
        {
          index: 1,
          name: "remote-decisioning-mbox" //group2
        }
      ]
    }
  }
})
.then(response => {
  const mboxes = response.prefetch.mboxes;
  let count = 1;

  mboxes.forEach(el => {
    adobe.target.applyOffers({
      selector: "#group" + count,
      response: {
        prefetch: {
          mboxes: [el]
        }
      }
    });

    count += 1;
  });
});
})
