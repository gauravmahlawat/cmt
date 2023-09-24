  setTimeout(function(){
  var $ = jQuery;
  $( function() {
    $( "#encode" ).click(
        function() {
        var encodedMessage = $.base64.encode( $( "#message" ).val() );
              $( "#message" ).val( encodedMessage );
          }
      );

    $( "#decode" ).click(
        function() {
        var decodedMessage = $.base64.decode( $( "#message" ).val() );
              $( "#message" ).val( decodedMessage );
          }
      );

      $( "#clear").click(
              function() {
                  $( "#message").val( "" );
              }
      );

		$( "#format").click(
			function() {
				var content = getValue();
				try {
					setValue( vkbeautify.css( content ) );
				} catch( err ) {
					alert( "Your document is invalid" );
				}
			}
		);
		function unquote( val ) {
			return val.replace( /^\s*\"(.*)\"\s*$/, "$1" );
		}

		function escapeTxt( val ) {
			val = val.replace( /&/g, "&amp;" );			
			val = val.replace( /</g, "&lt;" );
			val = val.replace( />/g, "&gt;" );
			return unquote( val );
		}
		
		function qname( name ) {
			name = name.replace( /(\s)+/g, "_" );
			return unquote( name );
		}

		$( "#convert").click(
			function() {
				var csv = $( "#csv" ).val();
				var sep = $( "#sep" ).val();
				var columns = $( "#cols" ).is( ":checked" );

				var lignes = csv.split( "\n" );
				var start = 0;
				
				var colNames = [];
				if ( columns ) {
					start = 1;
					colLbls = lignes[ 0 ].split( sep );
					for ( var i = 0; i < colLbls.length; i++ ) {
						colNames.push( 	qname( colLbls[ i ] ) );
					}
				}

				var xmlRes = "<root>\n";
				
				for ( var i = start; i < lignes.length; i++ ) {
					var l = lignes[ i ];
					xmlRes += " <row>\n";

					var content = l.split( sep );
					for ( var j = 0; j < content.length; j++ ) {
						if ( columns ) {
							xmlRes += "   <" + colNames[ j ] + ">";							
						} else
							xmlRes += "   <col" + ( j + 1 ) + ">";
						
						xmlRes += escapeTxt( content[ j ] );
						
						if ( columns ) {
							xmlRes += "</" + colNames[ j ] + ">";	
						} else
							xmlRes += "</col" + ( j + 1 ) + ">";
							
						xmlRes += "\n";							
					}

					xmlRes += " </row>\n";		
				}
				xmlRes += "</root>";
				
				setValue( xmlRes );
			}
		);

        function f2( v ) {
            if ( typeof v == "string" ) {
                if ( v == "NaN" )
                    return "00";
                if ( v.length < 2 ) {
                    return "0" + v;
                }
            } else
            if ( typeof v == "number" ) {
                if ( isNaN( v ) ) {
                    return "00";
                }
                if ( v < 10 ) {
                    return "0" + v;
                }
            }
            return v;
        }

        $( "#xc").keyup( function() {
            $( "#tem").css( "background-color", "#" + $( this).val() );
        });

        $( "#red").keyup(
            function() {
                $( "#tem").css( "background-color", "rgb(" + $( this).val() + "," + $( "#green").val() + "," + $( "#blue").val() + ")" );
            });

        $( "#green").keyup(
                function() {
                    $( "#tem").css( "background-color", "rgb(" + $( "#red").val() + "," + $( this ).val() + "," + $( "#blue").val() + ")" );
                });

        $( "#blue").keyup(
                function() {
                    $( "#tem").css( "background-color", "rgb(" + $( "#red" ).val() + "," + $( "#green").val() + "," + $( this ).val() + ")" );
                });

        $( "#toHex").click(
                function() {
                    var red = f2( parseInt( $( "#red" ).val()).toString( 16 ) );
                    var green = f2( parseInt( $( "#green" ).val()).toString( 16 ) );
                    var blue = f2( parseInt( $( "#blue" ).val()).toString( 16 ) );
                    $( "#xc").val( "#" + ( red + green + blue ).toUpperCase() );
                }
        );
        $( "#toDec" ).click(
            function() {
                var v = $( "#xc" ).val();
                if ( v.substring( 0, 1 ) == "#" )
                    v = v.substring( 1 );

                var red, green, blue;

                if ( v.length == 3 ) {
                    red = v.charAt( 0 );
                    red += v.charAt( 0 );

                    green = v.charAt( 1 );
                    green += v.charAt( 1 );

                    blue = v.charAt( 2 );
                    blue += v.charAt( 2 );
                } else {
                    if ( v.length == 6 ) {
                        red = v.charAt( 0 ) + v.charAt( 1 );
                        green = v.charAt( 2 ) + v.charAt( 3 );
                        blue = v.charAt( 4 ) + v.charAt( 5 );
                    } else {
                        alert( "Invalid color ?" );
                        return;
                    }
                }

                $( "#red").val( parseInt( red, 16 ) );
                $( "#green").val( parseInt( green, 16 ) );
                $( "#blue").val( parseInt( blue, 16 ) );
            }
        );
        $( "#toHex").click(
            function() {
                for ( var i = 1; i <= 3; i++ ) {
                    var v = $( "#v"+i).val();
                    if ( v ) {
                        var h = parseInt( v ).toString( 16 );
                        $( "#xv" + i).val(h.toUpperCase() );
                    }
                }
            }
    );
    $( "#toDec" ).click(
        function() {
            for ( var i = 1; i <= 3; i++ ) {
                var v = $( "#xv"+i).val();
                if ( v ) {
                    var h = parseInt( v, 16 );
                    $( "#v" + i).val( h );
                }
            }
        }
    ); 
  } 
  );
},5000)