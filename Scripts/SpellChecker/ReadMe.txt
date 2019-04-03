https://www.javascriptspellcheck.com/JavaScript_Spell_As_You_Type_Demo


Adds SpellChecking to all inputs.  Can specify if only needed on some controls.  


<script type='text/javascript' src='/JavaScriptSpellCheck/include.js' ></script>
<script type='text/javascript'>$Spelling.SpellCheckAsYouType('all')</script>

<textarea name="myTextArea1"  id="myTextArea1" cols="15" rows="4">Hello Worlb.</textarea>
<textarea name="myTextArea2"  id="myTextArea2" cols="15" rows="4">Hello Worlb.</textarea>
<textarea name="myTextArea3"  id="myTextArea3" cols="15" rows="4">Hello Worlb.</textarea>



or 
<script type='text/javascript'>$Spelling.SpellCheckAsYouType('myTextAreaId')</script>


THIS INFO IS FROM SITE AT TIME OF DOWNLOAd  HAS ALL INFO FOR EXTENSIBILITY OF THIS
THIS INFO IS FROM SITE AT TIME OF DOWNLOAd  HAS ALL INFO FOR EXTENSIBILITY OF THIS
THIS INFO IS FROM SITE AT TIME OF DOWNLOAd  HAS ALL INFO FOR EXTENSIBILITY OF THIS
THIS INFO IS FROM SITE AT TIME OF DOWNLOAd  HAS ALL INFO FOR EXTENSIBILITY OF THIS



$Spelling.SpellCheckInWindow(Fields)	Opens a spellchecking dialog window
Fields relates allows you to pick the fields you wish to spellcheck
Read more about how to target fields
Live Demo With Source Code...
$Spelling.SpellCheckAsYouType(Fields)	Causes any texarea(s) to underline any misspelled words - and provides spelling suggestions on right click.
Fields relates allows you to pick the fields you wish to spellcheck
Read more about how to target fields
Live Demo With Source Code...
$Spelling.LiveValidation(Field,MessageElementId)	Shows a warning message beside Field when it contains spelling errors.
Field relates to the *field you wish to spellcheck
MessageElementId is the id of the HTML element containing the warning message
Live Demo With Source Code...

Real-Time Spell Checking Functions
Function	Description	Example
$Spelling.BinSpellCheck(input)	Returns bool:
True if input is in the dictionary
False if it is not.
Live Demo With Source Code...
$Spelling.BinSpellCheckFields(Fields)	Spell checks one or more fields in your page - and returns bool:
True if all fields are spelled correctly
False if the fields contain spelling errors.
Live Demo With Source Code...
$Spelling.SpellCheckSuggest(input)	Returns an array of spelling suggestions for input.	Live Demo With Source Code...
$Spelling.ListDictionaries()	Returns an array of currently installed dictionaries in your JavaScriptSpellCheck/dictionaries folder.	Live Demo With Source Code...
AJAX Spell checking Functions
Function	Description	Example
o = $Spelling.AjaxSpellCheck(input);
o.onSpellCheck = function(result,suggestions){}

Spellchecks a word and asynchronously returns a boolean spellchecking result and suggestions.	Live Demo With Source Code...
o = $Spelling.AjaxSpellCheckFields(Fields)
o.onValidate = function(result){}

Spell checks one or more fields in your page - and returns asynchronously a boolean spellchecking result.	Live Demo With Source Code...
o = $Spelling.AjaxDidYouMean(string)
o.onDidYouMean = function(result){}

Asynchronously returns an suggestions string for a search box spellchecking phrase.	Live Demo With Source Code...
Properties
Property	Type	Default Value	Description
$Spelling.DefaultDictionary	string	"English (International)"	The dictionary language used by JavaSript SpellCheck.
You can download 20 + dictionary (.dic) files for free.
To use multiple dictionaries at once use a comma - "Espanol,Francais"
$Spelling.UserInterfaceTranslation	string	"en"	Translates the context menu and spellchecker dialog into over 50 international languages.
See our translations page for a full list of language locale codes.
$Spelling.ShowStatisticsScreen	bool	false	Shows a statistics screen (word count, edit count) after SpellCheckInWindow.
$Spelling.SubmitFormById	string	""	Will submit a form (identified by its id attribute) once spellchecking once SpellCheckInWindow is complete.
$Spelling.Theme	string	"js.modern"	Allows you to apply a CSS theme to change the appearance of JavaScript SpellCheck.
Corresponds to theme folder in /JavaScriptSpellCheck/themes
$Spelling.CaseSensitive	bool	true	Spellchecker notices cAse mIstAkes
$Spelling.IgnoreAllCaps	bool	true	Spellchecker ignores BLOCK CAPITAL letters which are often acronyms.
$Spelling.CheckGrammar	bool	true	Spellchecker notices basic grammar mistakes such as sentence casing and repeated words.
$Spelling.IgnoreNumbers	bool	true	Spellchecker ignores words with numbers in them like "High5" or "MSO7262BGO"
$Spelling.ShowThesaurus	bool	true	Spellchecker shows a thesaurus and look-up-meaning link during SpellCheckInWindow
$Spelling.ShowLanguagesInContextMenu	bool	false	Allows the user to pick a dictionary Language from all installed dictionaries during SpellCheckAsYouType
$Spelling.ServerModel	string	"auto"	Allows you to pick which server model JavaScriptSpellCheck will use for its AJAX requests. Values available are:
'php' - PHP
'asp' - classic ASP
'asp.net' - ASP.net 2 or above raw request handler
'aspx' - ASP.net 2 or above ASPX page
'auto' automatically detects the best choice in the vast majority of cases.
$Spelling.PopUpStyle



string	"modal"	SpellCheckInWindow pop-up style:
"modal" - a modal dialog window
"modeless" - a modeless dialog window
"popup" - a normal popup
"modalbox" - prototype style JavaScript modal pop-up.
"fancybox" - jquery style JavaScript modal pop-up.
See the custom PopUps And Themes Tutorial.


Events
Event	Description	Example
onDialogOpen()	SpellCheckInWindow dialog pops up.	$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onDialogOpen = function(){}

onDialogComplete()	SpellCheckInWindow dialog completes successfully - user has not quit	$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onDialogComplete = function(){}

onDialogCancel()	SpellCheckInWindow dialog completes is quite by the user	$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onDialogCancel = function(){}

onDialogClose()	SpellCheckInWindow dialog closes for any reason	$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onDialogClose = function(){}

onChangeLanguage(language)	SpellCheckInWindow or SpellAsYouType language is changed by the user.
Language name is passed as a string
$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onChangeLanguage = function(language){}

onIgnore(word)	A word is ignored by the user in wither SpellCheckInWindow or SpellAsYouType.
Word is passed as a string
$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onIgnore = function(word){}

onIgnoreAll(word)	The user clieck 'Ignore All' for a word in either SpellCheckInWindow or SpellAsYouType.
Word is passed as a string
$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onIgnoreAll = function(word){}

onChangeWord(from,to)	The user changes a word in either SpellCheckInWindow or SpellAsYouType.
"from" and "to" are passed as strings
$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onChangeWord = function(from,to){}

onChangeAll(from,to)	The user clicks 'Change All' for a word in SpellCheckInWindow.
"from" and "to" are passed as strings
$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onChangeAll = function(from,to){}

onLearnWord(word)	The user "Adds to Dictionary" in either SpellCheckInWindow or SpellAsYouType.
Word is passed as a string
$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onLearnWord = function(word){}

onLearnAutoCorrect(from,to)	The user adds to autocorrect in SpellCheckInWindow.
"from" and "to" are passed as strings
$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onLearnAutoCorrect = function(from,to){}

onUpdateFields(arrFields)	Any field is updated due to spellchecing.
arrFields is returned - an array of the Ids of all updated fields.
$Spelling.PopUpStyle="modeless";
o = $Spelling.SpellCheckInWindow('all');
o.onUpdateFields = function(arrFields){}



jQuery Functions & Options
JavaScriptSpellCheck also provides a jQuery SpellCheck Plugin

jQuery Functions


Function	Return Value	Description
$('#mySelction').spellCheckInDialog(options)	Opens a spellchecking dialog window	Spelling Instance Object
#mySelction can be any jQuery selection of elements
$('#mySelction').spellAsYouType(options)	Spelling Instance Object	Causes any texarea(s) selected to underline any misspelled words - and provides spelling suggestions on right click.
#mySelction can be any jQuery selection of elements
$('#mySelction').binSpellCheckFields(options)	*True if all fields are spelled correctly
False if the fields contain spelling errors.
Spell checks all field in the selection.
#mySelction can be any jQuery selection of elements

jQuery Options


Option	Default Value	Description
defaultDictionary	"English (International)"	Default dictionary the spell checker will use.
Relates to a .dic file in /JavaScriptSpellCheck/dictionaries
Learn About and Download Dictionaries
userInterfaceTranslation	"en"	Translates the spellchecker dialog into over 50 international languages automatically.
List of language locale codes...
showStatisticsScreen	true	Shows statistics such as word count and number of edits after spellCheckInDialog is complete.
submitFormById	""	javascript id of a form to submit after spellCheckInDialog is complete.
theme	"modern"	CSS theme to apply to the spellchecker.
Relates to a folder in "JavaScriptSpellCheck/themes"
Learn more...
caseSensitive	true	Catches spelling mistakes caused by iNcoorect CasIng.
checkGrammar	true	Catches basic grammar mistakes such as repeated words, sentence casing and punctuation
ignoreAllCaps	true	Ignores BLOCK CAPS which are often abbreviations or product codes.
ignoreNumbers	true	Ignores w0rds w1th num8rs in them which are often product codes.
showThesaurus	true	Shows a thesaurus and word meaning lookup during spellCheckInDialog
showLanguagesInContextMenu	true	Allows the user to change dictionary 'on the fly' when using spellAsYouType
serverModel	"auto"	Chooses the server model that does the 'behind the scenes' AJX spellchecking requests. We support:
'php' - PHP or above
'asp' - classic ASP
'asp.net' - ASP.net 2 or above raw request handler
'aspx' - ASP.net 2 or above ASPX page
'auto' automatically detects the best choice in the vast majority of cases.
popUpStyle	"auto"	spellCheckInDialog pop-up style:
"modal" - a modal dialog window
"modeless" - a modeless dialog window
"popup" - a normal popup
"modalbox" - prototype style JavaScript modal pop-up.
"fancybox" - jQuery JavaScript modal pop-up.