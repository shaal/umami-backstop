'use strict';

const Page = require('../page-objects/crm-configure-contribution-page.js');

module.exports = async (engine, scenario, viewPort) => {
  const page = await Page.build(engine, scenario, viewPort);

  await engine.click('.crm-contribution-page-configure-actions .crm-hover-button');
  await page.clickAndWaitForNavigation('a[title="Premiums"]');
  await engine.waitForSelector('.CRM_Contribute_Form_ContributionPage_Premium');
  await page.enableCheckbox('input#premiums_active');
  await require('../common/open-accordions')(engine, scenario, viewPort);
};
