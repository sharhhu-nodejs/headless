var ValueType = v91["ValueType"] = {
	vX1: ["ValueType"],
	vn1: ["TNull", "TInt", "TFloat", "TBool", "TObject", "TFunction", "TClass", "TEnum", "TUnknown"]
};
ValueType.TNull = ["TNull", 0];
ValueType.TNull.toString = vA1;
ValueType.TNull.va1 = ValueType;
ValueType.TInt = ["TInt", 1];
ValueType.TInt.toString = vA1;
ValueType.TInt.va1 = ValueType;
ValueType.TFloat = ["TFloat", 2];
ValueType.TFloat.toString = vA1;
ValueType.TFloat.va1 = ValueType;
ValueType.TBool = ["TBool", 3];
ValueType.TBool.toString = vA1;
ValueType.TBool.va1 = ValueType;
ValueType.TObject = ["TObject", 4];
ValueType.TObject.toString = vA1;
ValueType.TObject.va1 = ValueType;
ValueType.TFunction = ["TFunction", 5];
ValueType.TFunction.toString = vA1;
ValueType.TFunction.va1 = ValueType;
ValueType.TClass = function(c) {
	var vo1 = ["TClass", 6, c];
	vo1.va1 = ValueType;
	vo1.toString = vA1;
	return vo1;
};
ValueType.TEnum = function(e) {
	var vo1 = ["TEnum", 7, e];
	vo1.va1 = ValueType;
	vo1.toString = vA1;
	return vo1;
};
ValueType.TUnknown = ["TUnknown", 8];
ValueType.TUnknown.toString = vA1;
ValueType.TUnknown.va1 = ValueType;