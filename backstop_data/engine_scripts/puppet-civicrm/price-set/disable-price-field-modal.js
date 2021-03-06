'use strict';

module.exports = async (engine, scenario, viewport) => {
  await require('./view-and-edit-price-fields')(engine, scenario, viewport);
  await engine.click('.crm-entity span.crm-hover-button');
  await engine.click('a[title="Disable Price"]');
  await engine.waitFor('.crm-confirm-dialog.crm-ajax-container', { visible: true });
  await engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
};
