(function(es, { EQUALS, ISNULL, EQUALS_CI, IS_IN, IS_IN_CI }, {  }) {
es.Action.fn_svDocumentTrade_1 = function($args) { return !$args.isNew && $args.entityGID;};

es.Action.fn_svDocumentTrade_3 = function($args) { return $args.isAdmin=="1";};

es.Action.fn_svDocumentTrade_2 = function($args) { return $args.fTransitionStepCode == "CONFIRMED" && !$args.IsDirty;};

es.Action.fn_svDocumentTrade_0 = function($args) {
 if (!$args.currentEntityGID) return
return $args.currentEntityGID
};

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });