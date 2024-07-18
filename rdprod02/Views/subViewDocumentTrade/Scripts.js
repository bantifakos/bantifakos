(function(es, { EQUALS, ISNULL, EQUALS_CI, IS_IN, IS_IN_CI }, {  }) {
es.Action.fn_f14102eac08541359114af6aab8f67bf = function($args) {
 if ($args.context.value != null) {
    // Create a date object from $args.context.value
    let contextDate = new Date($args.context.value);
    
    // Check if $args.context.value is a valid date
    if (!isNaN(contextDate.getTime())) {
        // Create a date object for '20240101'
        let compareDate = new Date('2027-01-01');
        
        // Compare the two dates
        if (contextDate < compareDate) {
            return {fg: 3};
        }
    }
}
};

es.Action.fn_subViewDocumentTrade_0 = function($args) { return !!$args.currentEntityGID && !$args.isDirtyEntity;};

})(window.es, window.es.AppHelpers || { }, window.es.Action || { });