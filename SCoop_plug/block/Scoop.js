'use strict';

goog.provide('Blockly.Blocks.SCoop');

goog.require('Blockly.Blocks');


Blockly.Blocks['SCoopTask'] = {
  init: function() {
	var _tasknum = [["1", "1"], ["2", "2"], ["3", "3"],["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"],["8", "8"]];
    this.appendDummyInput()
        .appendField(Blockly.Msg.SCoopTask)
	      .appendField(new Blockly.FieldDropdown(_tasknum), "_tasknum");
    this.appendStatementInput("setup")
        .appendField(Blockly.Msg.SCoopTask_setup)
        .setCheck(null);
    this.appendStatementInput("loop")
        .appendField(Blockly.Msg.SCoopTask_loop)
        .setCheck(null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['SCoop_yield'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput("")
		    .appendField(Blockly.Msg.SCoop_yield);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
  }
};
Blockly.Blocks['SCoop_sleep'] = {
  init: function() {
    this.setColour(65);
    this.appendDummyInput("")
		    .appendField(Blockly.Msg.SCoop_sleep);
	  this.appendValueInput("sleeplength", Number)
        .setCheck(Number);
	  this.appendDummyInput("")
		    .appendField(Blockly.Msg.SCoop_sleeplength);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};