'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await page.clickAndWaitForSuccessfulSearch();
  await engine.click('span.crm-hover-button');
};
