'use strict';

const Page = require('../page-objects/crm-search-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await engine.type('#text', 'Barry Adams');
  await page.clickAndWaitForNavigation('#_qf_Custom_refresh');
};