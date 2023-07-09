// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import dfuncListener from './dfuncListener.js';
import dfuncVisitor from './dfuncVisitor.js';

const serializedATN = [4,1,41,207,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,3,0,40,8,
0,1,0,5,0,43,8,0,10,0,12,0,46,9,0,1,0,1,0,1,1,4,1,51,8,1,11,1,12,1,52,1,
2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,62,8,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,70,8,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,81,8,5,10,5,12,5,84,9,5,1,6,1,6,
1,6,1,6,1,7,1,7,3,7,92,8,7,1,8,1,8,1,8,1,9,4,9,98,8,9,11,9,12,9,99,1,9,3,
9,103,8,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,
12,3,12,118,8,12,1,13,1,13,1,13,1,13,1,14,1,14,3,14,126,8,14,1,14,1,14,1,
14,1,14,1,15,1,15,1,15,5,15,135,8,15,10,15,12,15,138,9,15,1,16,1,16,1,16,
5,16,143,8,16,10,16,12,16,146,9,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
3,17,170,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,5,17,196,8,17,
10,17,12,17,199,9,17,1,18,1,18,3,18,203,8,18,1,18,1,18,1,18,0,1,34,19,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,4,1,0,20,22,1,0,18,19,
2,0,12,13,16,17,1,0,10,11,219,0,39,1,0,0,0,2,50,1,0,0,0,4,54,1,0,0,0,6,58,
1,0,0,0,8,65,1,0,0,0,10,77,1,0,0,0,12,85,1,0,0,0,14,91,1,0,0,0,16,93,1,0,
0,0,18,97,1,0,0,0,20,104,1,0,0,0,22,109,1,0,0,0,24,117,1,0,0,0,26,119,1,
0,0,0,28,123,1,0,0,0,30,131,1,0,0,0,32,139,1,0,0,0,34,169,1,0,0,0,36,200,
1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,39,40,1,0,0,0,40,44,1,0,0,0,41,43,3,
8,4,0,42,41,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,47,1,0,
0,0,46,44,1,0,0,0,47,48,5,0,0,1,48,1,1,0,0,0,49,51,3,4,2,0,50,49,1,0,0,0,
51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,3,1,0,0,0,54,55,5,36,0,0,55,
56,5,39,0,0,56,57,5,29,0,0,57,5,1,0,0,0,58,59,5,38,0,0,59,61,5,27,0,0,60,
62,3,32,16,0,61,60,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,63,64,5,28,0,0,64,
7,1,0,0,0,65,66,5,38,0,0,66,67,5,30,0,0,67,69,5,27,0,0,68,70,3,10,5,0,69,
68,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,5,28,0,0,72,73,5,1,0,0,73,74,
3,24,12,0,74,75,3,14,7,0,75,76,5,29,0,0,76,9,1,0,0,0,77,82,3,12,6,0,78,79,
5,31,0,0,79,81,3,12,6,0,80,78,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,
1,0,0,0,83,11,1,0,0,0,84,82,1,0,0,0,85,86,5,38,0,0,86,87,5,33,0,0,87,88,
3,24,12,0,88,13,1,0,0,0,89,92,3,16,8,0,90,92,3,18,9,0,91,89,1,0,0,0,91,90,
1,0,0,0,92,15,1,0,0,0,93,94,5,2,0,0,94,95,3,34,17,0,95,17,1,0,0,0,96,98,
3,20,10,0,97,96,1,0,0,0,98,99,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,
1,0,0,0,101,103,3,22,11,0,102,101,1,0,0,0,102,103,1,0,0,0,103,19,1,0,0,0,
104,105,5,3,0,0,105,106,3,34,17,0,106,107,5,2,0,0,107,108,3,34,17,0,108,
21,1,0,0,0,109,110,5,3,0,0,110,111,5,7,0,0,111,112,5,2,0,0,112,113,3,34,
17,0,113,23,1,0,0,0,114,118,5,6,0,0,115,118,3,26,13,0,116,118,3,28,14,0,
117,114,1,0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,25,1,0,0,0,119,120,5,
25,0,0,120,121,3,24,12,0,121,122,5,26,0,0,122,27,1,0,0,0,123,125,5,27,0,
0,124,126,3,30,15,0,125,124,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,
128,5,28,0,0,128,129,5,1,0,0,129,130,3,24,12,0,130,29,1,0,0,0,131,136,3,
24,12,0,132,133,5,31,0,0,133,135,3,24,12,0,134,132,1,0,0,0,135,138,1,0,0,
0,136,134,1,0,0,0,136,137,1,0,0,0,137,31,1,0,0,0,138,136,1,0,0,0,139,144,
3,34,17,0,140,141,5,31,0,0,141,143,3,34,17,0,142,140,1,0,0,0,143,146,1,0,
0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,33,1,0,0,0,146,144,1,0,0,0,147,148,
6,17,-1,0,148,149,5,19,0,0,149,170,3,34,17,18,150,151,5,15,0,0,151,170,3,
34,17,12,152,153,5,4,0,0,153,154,3,34,17,0,154,155,5,5,0,0,155,156,3,34,
17,0,156,157,5,7,0,0,157,158,3,34,17,8,158,170,1,0,0,0,159,170,5,37,0,0,
160,170,5,35,0,0,161,170,3,6,3,0,162,170,3,36,18,0,163,170,5,38,0,0,164,
170,5,39,0,0,165,166,5,27,0,0,166,167,3,34,17,0,167,168,5,28,0,0,168,170,
1,0,0,0,169,147,1,0,0,0,169,150,1,0,0,0,169,152,1,0,0,0,169,159,1,0,0,0,
169,160,1,0,0,0,169,161,1,0,0,0,169,162,1,0,0,0,169,163,1,0,0,0,169,164,
1,0,0,0,169,165,1,0,0,0,170,197,1,0,0,0,171,172,10,17,0,0,172,173,5,14,0,
0,173,196,3,34,17,17,174,175,10,16,0,0,175,176,7,0,0,0,176,196,3,34,17,17,
177,178,10,15,0,0,178,179,7,1,0,0,179,196,3,34,17,16,180,181,10,14,0,0,181,
182,7,2,0,0,182,196,3,34,17,15,183,184,10,13,0,0,184,185,7,3,0,0,185,196,
3,34,17,14,186,187,10,11,0,0,187,188,5,9,0,0,188,196,3,34,17,12,189,190,
10,10,0,0,190,191,5,8,0,0,191,196,3,34,17,11,192,193,10,9,0,0,193,194,5,
34,0,0,194,196,3,34,17,10,195,171,1,0,0,0,195,174,1,0,0,0,195,177,1,0,0,
0,195,180,1,0,0,0,195,183,1,0,0,0,195,186,1,0,0,0,195,189,1,0,0,0,195,192,
1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,35,1,0,0,0,199,
197,1,0,0,0,200,202,5,25,0,0,201,203,3,32,16,0,202,201,1,0,0,0,202,203,1,
0,0,0,203,204,1,0,0,0,204,205,5,26,0,0,205,37,1,0,0,0,17,39,44,52,61,69,
82,91,99,102,117,125,136,144,169,195,197,202];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class dfuncParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'->'", "'=>'", "'|'", "'if'", "'then'", 
                            null, "'else'", "'or'", "'and'", "'='", "'!='", 
                            "'>='", "'<='", "'^'", "'!'", "'>'", "'<'", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", "'{'", "'}'", 
                            "'['", "']'", "'('", "')'", "';'", "':='", "','", 
                            "'?'", "':'", "'++'", null, "'import'" ];
    static symbolicNames = [ null, null, null, null, null, null, "PrimitiveType", 
                             "Else", "Or", "And", "Equals", "NEquals", "GTEquals", 
                             "LTEquals", "Pow", "Excl", "GT", "LT", "Add", 
                             "Subtract", "Multiply", "Divide", "Modulus", 
                             "OBrace", "CBrace", "OBracket", "CBracket", 
                             "OParen", "CParen", "SColon", "Assign", "Comma", 
                             "QMark", "Colon", "Concat", "Bool", "KW_IMPORT", 
                             "Number", "Identifier", "String", "Comment", 
                             "Space" ];
    static ruleNames = [ "parse", "importBlock", "importStatement", "functionCall", 
                         "functionDecl", "paramList", "param", "functionBlock", 
                         "inlineFunctionBlock", "piecewiseFunctionBlock", 
                         "piecewiseBranch", "elsePiecewiseBranch", "type", 
                         "listType", "functionType", "typeList", "exprList", 
                         "expression", "list" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = dfuncParser.ruleNames;
        this.literalNames = dfuncParser.literalNames;
        this.symbolicNames = dfuncParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 17:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 17);
    		case 1:
    			return this.precpred(this._ctx, 16);
    		case 2:
    			return this.precpred(this._ctx, 15);
    		case 3:
    			return this.precpred(this._ctx, 14);
    		case 4:
    			return this.precpred(this._ctx, 13);
    		case 5:
    			return this.precpred(this._ctx, 11);
    		case 6:
    			return this.precpred(this._ctx, 10);
    		case 7:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, dfuncParser.RULE_parse);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 38;
	            this.importBlock();
	        }

	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 41;
	            this.functionDecl();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
	        this.match(dfuncParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importBlock() {
	    let localctx = new ImportBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, dfuncParser.RULE_importBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this.importStatement();
	            this.state = 52; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===36);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, dfuncParser.RULE_importStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(dfuncParser.KW_IMPORT);
	        this.state = 55;
	        this.match(dfuncParser.String);
	        this.state = 56;
	        this.match(dfuncParser.SColon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, dfuncParser.RULE_functionCall);
	    var _la = 0; // Token type
	    try {
	        localctx = new IdentifierFunctionCallContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(dfuncParser.Identifier);
	        this.state = 59;
	        this.match(dfuncParser.OParen);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 168329232) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & 29) !== 0)) {
	            this.state = 60;
	            this.exprList();
	        }

	        this.state = 63;
	        this.match(dfuncParser.CParen);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDecl() {
	    let localctx = new FunctionDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, dfuncParser.RULE_functionDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(dfuncParser.Identifier);
	        this.state = 66;
	        this.match(dfuncParser.Assign);
	        this.state = 67;
	        this.match(dfuncParser.OParen);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 68;
	            this.paramList();
	        }

	        this.state = 71;
	        this.match(dfuncParser.CParen);
	        this.state = 72;
	        this.match(dfuncParser.T__0);
	        this.state = 73;
	        this.type();
	        this.state = 74;
	        this.functionBlock();
	        this.state = 75;
	        this.match(dfuncParser.SColon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, dfuncParser.RULE_paramList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.param();
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 78;
	            this.match(dfuncParser.Comma);
	            this.state = 79;
	            this.param();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, dfuncParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(dfuncParser.Identifier);
	        this.state = 86;
	        this.match(dfuncParser.Colon);
	        this.state = 87;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBlock() {
	    let localctx = new FunctionBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, dfuncParser.RULE_functionBlock);
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.inlineFunctionBlock();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.piecewiseFunctionBlock();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inlineFunctionBlock() {
	    let localctx = new InlineFunctionBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, dfuncParser.RULE_inlineFunctionBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(dfuncParser.T__1);
	        this.state = 94;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	piecewiseFunctionBlock() {
	    let localctx = new PiecewiseFunctionBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, dfuncParser.RULE_piecewiseFunctionBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 96;
	        		this.piecewiseBranch();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 99; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 101;
	            this.elsePiecewiseBranch();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	piecewiseBranch() {
	    let localctx = new PiecewiseBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, dfuncParser.RULE_piecewiseBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(dfuncParser.T__2);
	        this.state = 105;
	        this.expression(0);
	        this.state = 106;
	        this.match(dfuncParser.T__1);
	        this.state = 107;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elsePiecewiseBranch() {
	    let localctx = new ElsePiecewiseBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, dfuncParser.RULE_elsePiecewiseBranch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(dfuncParser.T__2);
	        this.state = 110;
	        this.match(dfuncParser.Else);
	        this.state = 111;
	        this.match(dfuncParser.T__1);
	        this.state = 112;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, dfuncParser.RULE_type);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.match(dfuncParser.PrimitiveType);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.listType();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 116;
	            this.functionType();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listType() {
	    let localctx = new ListTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, dfuncParser.RULE_listType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(dfuncParser.OBracket);
	        this.state = 120;
	        this.type();
	        this.state = 121;
	        this.match(dfuncParser.CBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionType() {
	    let localctx = new FunctionTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, dfuncParser.RULE_functionType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(dfuncParser.OParen);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 167772224) !== 0)) {
	            this.state = 124;
	            this.typeList();
	        }

	        this.state = 127;
	        this.match(dfuncParser.CParen);
	        this.state = 128;
	        this.match(dfuncParser.T__0);
	        this.state = 129;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeList() {
	    let localctx = new TypeListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, dfuncParser.RULE_typeList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.type();
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 132;
	            this.match(dfuncParser.Comma);
	            this.state = 133;
	            this.type();
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, dfuncParser.RULE_exprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.expression(0);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 140;
	            this.match(dfuncParser.Comma);
	            this.state = 141;
	            this.expression(0);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 34;
	    this.enterRecursionRule(localctx, 34, dfuncParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 148;
	            this.match(dfuncParser.Subtract);
	            this.state = 149;
	            this.expression(18);
	            break;

	        case 2:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 150;
	            this.match(dfuncParser.Excl);
	            this.state = 151;
	            this.expression(12);
	            break;

	        case 3:
	            localctx = new TernaryExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 152;
	            this.match(dfuncParser.T__3);
	            this.state = 153;
	            this.expression(0);
	            this.state = 154;
	            this.match(dfuncParser.T__4);
	            this.state = 155;
	            this.expression(0);
	            this.state = 156;
	            this.match(dfuncParser.Else);
	            this.state = 157;
	            this.expression(8);
	            break;

	        case 4:
	            localctx = new NumberExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 159;
	            this.match(dfuncParser.Number);
	            break;

	        case 5:
	            localctx = new BoolExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 160;
	            this.match(dfuncParser.Bool);
	            break;

	        case 6:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 161;
	            this.functionCall();
	            break;

	        case 7:
	            localctx = new ListExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 162;
	            this.list();
	            break;

	        case 8:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 163;
	            this.match(dfuncParser.Identifier);
	            break;

	        case 9:
	            localctx = new StringExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 164;
	            this.match(dfuncParser.String);
	            break;

	        case 10:
	            localctx = new ExpressionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 165;
	            this.match(dfuncParser.OParen);
	            this.state = 166;
	            this.expression(0);
	            this.state = 167;
	            this.match(dfuncParser.CParen);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 197;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 195;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, dfuncParser.RULE_expression);
	                    this.state = 171;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 172;
	                    this.match(dfuncParser.Pow);
	                    this.state = 173;
	                    this.expression(17);
	                    break;

	                case 2:
	                    localctx = new MultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, dfuncParser.RULE_expression);
	                    this.state = 174;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 175;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 7340032) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 176;
	                    this.expression(17);
	                    break;

	                case 3:
	                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, dfuncParser.RULE_expression);
	                    this.state = 177;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 178;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===19)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 179;
	                    this.expression(16);
	                    break;

	                case 4:
	                    localctx = new CompExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, dfuncParser.RULE_expression);
	                    this.state = 180;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 181;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 208896) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 182;
	                    this.expression(15);
	                    break;

	                case 5:
	                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, dfuncParser.RULE_expression);
	                    this.state = 183;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 184;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 185;
	                    this.expression(14);
	                    break;

	                case 6:
	                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, dfuncParser.RULE_expression);
	                    this.state = 186;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 187;
	                    this.match(dfuncParser.And);
	                    this.state = 188;
	                    this.expression(12);
	                    break;

	                case 7:
	                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, dfuncParser.RULE_expression);
	                    this.state = 189;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 190;
	                    this.match(dfuncParser.Or);
	                    this.state = 191;
	                    this.expression(11);
	                    break;

	                case 8:
	                    localctx = new ConcatExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, dfuncParser.RULE_expression);
	                    this.state = 192;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 193;
	                    this.match(dfuncParser.Concat);
	                    this.state = 194;
	                    this.expression(10);
	                    break;

	                } 
	            }
	            this.state = 199;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, dfuncParser.RULE_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(dfuncParser.OBracket);
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 168329232) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & 29) !== 0)) {
	            this.state = 201;
	            this.exprList();
	        }

	        this.state = 204;
	        this.match(dfuncParser.CBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

dfuncParser.EOF = antlr4.Token.EOF;
dfuncParser.T__0 = 1;
dfuncParser.T__1 = 2;
dfuncParser.T__2 = 3;
dfuncParser.T__3 = 4;
dfuncParser.T__4 = 5;
dfuncParser.PrimitiveType = 6;
dfuncParser.Else = 7;
dfuncParser.Or = 8;
dfuncParser.And = 9;
dfuncParser.Equals = 10;
dfuncParser.NEquals = 11;
dfuncParser.GTEquals = 12;
dfuncParser.LTEquals = 13;
dfuncParser.Pow = 14;
dfuncParser.Excl = 15;
dfuncParser.GT = 16;
dfuncParser.LT = 17;
dfuncParser.Add = 18;
dfuncParser.Subtract = 19;
dfuncParser.Multiply = 20;
dfuncParser.Divide = 21;
dfuncParser.Modulus = 22;
dfuncParser.OBrace = 23;
dfuncParser.CBrace = 24;
dfuncParser.OBracket = 25;
dfuncParser.CBracket = 26;
dfuncParser.OParen = 27;
dfuncParser.CParen = 28;
dfuncParser.SColon = 29;
dfuncParser.Assign = 30;
dfuncParser.Comma = 31;
dfuncParser.QMark = 32;
dfuncParser.Colon = 33;
dfuncParser.Concat = 34;
dfuncParser.Bool = 35;
dfuncParser.KW_IMPORT = 36;
dfuncParser.Number = 37;
dfuncParser.Identifier = 38;
dfuncParser.String = 39;
dfuncParser.Comment = 40;
dfuncParser.Space = 41;

dfuncParser.RULE_parse = 0;
dfuncParser.RULE_importBlock = 1;
dfuncParser.RULE_importStatement = 2;
dfuncParser.RULE_functionCall = 3;
dfuncParser.RULE_functionDecl = 4;
dfuncParser.RULE_paramList = 5;
dfuncParser.RULE_param = 6;
dfuncParser.RULE_functionBlock = 7;
dfuncParser.RULE_inlineFunctionBlock = 8;
dfuncParser.RULE_piecewiseFunctionBlock = 9;
dfuncParser.RULE_piecewiseBranch = 10;
dfuncParser.RULE_elsePiecewiseBranch = 11;
dfuncParser.RULE_type = 12;
dfuncParser.RULE_listType = 13;
dfuncParser.RULE_functionType = 14;
dfuncParser.RULE_typeList = 15;
dfuncParser.RULE_exprList = 16;
dfuncParser.RULE_expression = 17;
dfuncParser.RULE_list = 18;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_parse;
    }

	EOF() {
	    return this.getToken(dfuncParser.EOF, 0);
	};

	importBlock() {
	    return this.getTypedRuleContext(ImportBlockContext,0);
	};

	functionDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitParse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitParse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_importBlock;
    }

	importStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportStatementContext);
	    } else {
	        return this.getTypedRuleContext(ImportStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterImportBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitImportBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitImportBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_importStatement;
    }

	KW_IMPORT() {
	    return this.getToken(dfuncParser.KW_IMPORT, 0);
	};

	String() {
	    return this.getToken(dfuncParser.String, 0);
	};

	SColon() {
	    return this.getToken(dfuncParser.SColon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterImportStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitImportStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitImportStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_functionCall;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IdentifierFunctionCallContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(dfuncParser.Identifier, 0);
	};

	OParen() {
	    return this.getToken(dfuncParser.OParen, 0);
	};

	CParen() {
	    return this.getToken(dfuncParser.CParen, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterIdentifierFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitIdentifierFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitIdentifierFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.IdentifierFunctionCallContext = IdentifierFunctionCallContext;

class FunctionDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_functionDecl;
    }

	Identifier() {
	    return this.getToken(dfuncParser.Identifier, 0);
	};

	Assign() {
	    return this.getToken(dfuncParser.Assign, 0);
	};

	OParen() {
	    return this.getToken(dfuncParser.OParen, 0);
	};

	CParen() {
	    return this.getToken(dfuncParser.CParen, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	functionBlock() {
	    return this.getTypedRuleContext(FunctionBlockContext,0);
	};

	SColon() {
	    return this.getToken(dfuncParser.SColon, 0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterFunctionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitFunctionDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitFunctionDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_paramList;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dfuncParser.Comma);
	    } else {
	        return this.getToken(dfuncParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitParamList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitParamList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_param;
    }

	Identifier() {
	    return this.getToken(dfuncParser.Identifier, 0);
	};

	Colon() {
	    return this.getToken(dfuncParser.Colon, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_functionBlock;
    }

	inlineFunctionBlock() {
	    return this.getTypedRuleContext(InlineFunctionBlockContext,0);
	};

	piecewiseFunctionBlock() {
	    return this.getTypedRuleContext(PiecewiseFunctionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterFunctionBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitFunctionBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitFunctionBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InlineFunctionBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_inlineFunctionBlock;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterInlineFunctionBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitInlineFunctionBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitInlineFunctionBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PiecewiseFunctionBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_piecewiseFunctionBlock;
    }

	piecewiseBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PiecewiseBranchContext);
	    } else {
	        return this.getTypedRuleContext(PiecewiseBranchContext,i);
	    }
	};

	elsePiecewiseBranch() {
	    return this.getTypedRuleContext(ElsePiecewiseBranchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterPiecewiseFunctionBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitPiecewiseFunctionBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitPiecewiseFunctionBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PiecewiseBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_piecewiseBranch;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterPiecewiseBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitPiecewiseBranch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitPiecewiseBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElsePiecewiseBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_elsePiecewiseBranch;
    }

	Else() {
	    return this.getToken(dfuncParser.Else, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterElsePiecewiseBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitElsePiecewiseBranch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitElsePiecewiseBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_type;
    }

	PrimitiveType() {
	    return this.getToken(dfuncParser.PrimitiveType, 0);
	};

	listType() {
	    return this.getTypedRuleContext(ListTypeContext,0);
	};

	functionType() {
	    return this.getTypedRuleContext(FunctionTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_listType;
    }

	OBracket() {
	    return this.getToken(dfuncParser.OBracket, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	CBracket() {
	    return this.getToken(dfuncParser.CBracket, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterListType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitListType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitListType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_functionType;
    }

	OParen() {
	    return this.getToken(dfuncParser.OParen, 0);
	};

	CParen() {
	    return this.getToken(dfuncParser.CParen, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	typeList() {
	    return this.getTypedRuleContext(TypeListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterFunctionType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitFunctionType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitFunctionType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_typeList;
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dfuncParser.Comma);
	    } else {
	        return this.getToken(dfuncParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterTypeList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitTypeList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitTypeList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_exprList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(dfuncParser.Comma);
	    } else {
	        return this.getToken(dfuncParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitExprList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitExprList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BoolExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Bool() {
	    return this.getToken(dfuncParser.Bool, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterBoolExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitBoolExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitBoolExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.BoolExpressionContext = BoolExpressionContext;

class NumberExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Number() {
	    return this.getToken(dfuncParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterNumberExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitNumberExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitNumberExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.NumberExpressionContext = NumberExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(dfuncParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.IdentifierExpressionContext = IdentifierExpressionContext;

class NotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Excl() {
	    return this.getToken(dfuncParser.Excl, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.NotExpressionContext = NotExpressionContext;

class ConcatExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Concat() {
	    return this.getToken(dfuncParser.Concat, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterConcatExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitConcatExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitConcatExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.ConcatExpressionContext = ConcatExpressionContext;

class OrExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Or() {
	    return this.getToken(dfuncParser.Or, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.OrExpressionContext = OrExpressionContext;

class UnaryMinusExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Subtract() {
	    return this.getToken(dfuncParser.Subtract, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterUnaryMinusExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitUnaryMinusExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitUnaryMinusExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class PowerExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Pow() {
	    return this.getToken(dfuncParser.Pow, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterPowerExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitPowerExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitPowerExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.PowerExpressionContext = PowerExpressionContext;

class EqExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Equals() {
	    return this.getToken(dfuncParser.Equals, 0);
	};

	NEquals() {
	    return this.getToken(dfuncParser.NEquals, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterEqExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitEqExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitEqExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.EqExpressionContext = EqExpressionContext;

class AndExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	And() {
	    return this.getToken(dfuncParser.And, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.AndExpressionContext = AndExpressionContext;

class StringExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	String() {
	    return this.getToken(dfuncParser.String, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterStringExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitStringExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitStringExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.StringExpressionContext = StringExpressionContext;

class ExpressionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OParen() {
	    return this.getToken(dfuncParser.OParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CParen() {
	    return this.getToken(dfuncParser.CParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterExpressionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitExpressionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitExpressionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.ExpressionExpressionContext = ExpressionExpressionContext;

class AddExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Add() {
	    return this.getToken(dfuncParser.Add, 0);
	};

	Subtract() {
	    return this.getToken(dfuncParser.Subtract, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterAddExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitAddExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitAddExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.AddExpressionContext = AddExpressionContext;

class CompExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	GTEquals() {
	    return this.getToken(dfuncParser.GTEquals, 0);
	};

	LTEquals() {
	    return this.getToken(dfuncParser.LTEquals, 0);
	};

	GT() {
	    return this.getToken(dfuncParser.GT, 0);
	};

	LT() {
	    return this.getToken(dfuncParser.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterCompExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitCompExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitCompExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.CompExpressionContext = CompExpressionContext;

class FunctionCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterFunctionCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitFunctionCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitFunctionCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

class MultExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Multiply() {
	    return this.getToken(dfuncParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(dfuncParser.Divide, 0);
	};

	Modulus() {
	    return this.getToken(dfuncParser.Modulus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterMultExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitMultExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitMultExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.MultExpressionContext = MultExpressionContext;

class ListExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterListExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitListExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitListExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.ListExpressionContext = ListExpressionContext;

class TernaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Else() {
	    return this.getToken(dfuncParser.Else, 0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterTernaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitTernaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitTernaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

dfuncParser.TernaryExpressionContext = TernaryExpressionContext;

class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = dfuncParser.RULE_list;
    }

	OBracket() {
	    return this.getToken(dfuncParser.OBracket, 0);
	};

	CBracket() {
	    return this.getToken(dfuncParser.CBracket, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof dfuncListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof dfuncVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




dfuncParser.ParseContext = ParseContext; 
dfuncParser.ImportBlockContext = ImportBlockContext; 
dfuncParser.ImportStatementContext = ImportStatementContext; 
dfuncParser.FunctionCallContext = FunctionCallContext; 
dfuncParser.FunctionDeclContext = FunctionDeclContext; 
dfuncParser.ParamListContext = ParamListContext; 
dfuncParser.ParamContext = ParamContext; 
dfuncParser.FunctionBlockContext = FunctionBlockContext; 
dfuncParser.InlineFunctionBlockContext = InlineFunctionBlockContext; 
dfuncParser.PiecewiseFunctionBlockContext = PiecewiseFunctionBlockContext; 
dfuncParser.PiecewiseBranchContext = PiecewiseBranchContext; 
dfuncParser.ElsePiecewiseBranchContext = ElsePiecewiseBranchContext; 
dfuncParser.TypeContext = TypeContext; 
dfuncParser.ListTypeContext = ListTypeContext; 
dfuncParser.FunctionTypeContext = FunctionTypeContext; 
dfuncParser.TypeListContext = TypeListContext; 
dfuncParser.ExprListContext = ExprListContext; 
dfuncParser.ExpressionContext = ExpressionContext; 
dfuncParser.ListContext = ListContext; 
