game.spendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('exp-screen')), -10); // TODO
	
                me.input.bindKey(me.input.KEY.F1, "F1");
                me.input.bindKey(me.input.KEY.F2, "F2");
                me.input.bindKey(me.input.KEY.F3, "F3");
                me.input.bindKey(me.input.KEY.F4, "F4");
                me.input.bindKey(me.input.KEY.F5, "F5");
                var exp1cost = ((Number(game.data.exp1) + 1) * 10);
                console.log(game.data.exp + " spend");
                
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font("Arial", 26, "white");
                    },
                    
                    draw: function(renderer){
                        console.log("draw");
                        this.font.draw(renderer.getContext(), "Press f1-f4 to buy  maps, f5 to skip", this.pos.x, this.pos.y);
                        this.font.draw(renderer.getContext(), "CURRENT EXP: " + game.data.exp.toString(), this.pos.x + 100, this.pos.y + 50);
                        this.font.draw(renderer.getContext(), "F1: Unlock Map 1",  this.pos.x, this.pos.y + 100);
                        this.font.draw(renderer.getContext(), "F2: Unlock Map 2", this.pos.x, this.pos.y + 150);
                        this.font.draw(renderer.getContext(), "F3: Unlock Map 3", this.pos.x, this.pos.y + 200);
                        this.font.draw(renderer.getContext(), "F4: Unlock Map 4", this.pos.x, this.pos.y + 250);
                        
                    }
                  
                   
                           })), 10);   
                           
                    this.handler = me.event.subscribe(me.event.KEYDOWN, function(action, keyCode, edge){
                        if(action === "F1"){
                           if(game.data.exp >= exp1cost){
                               game.data.exp1 += 1;
                               game.data.exp -= exp1cost;
                               me.state.change(me.state.PLAY);
                           }
                        }else if(action === "F2"){
                            
                        }else if(action === "F3"){
                            
                        }else if(action === "F4"){
                            
                        }else if(action === "F5"){
                            me.state.change(me.state.PLAY);
                        }
                    });
                    
                    },
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.F1, "F1");
                me.input.unbindKey(me.input.KEY.F2, "F2");
                me.input.unbindKey(me.input.KEY.F3, "F3");
                me.input.unbindKey(me.input.KEY.F4, "F4");
                me.input.unbindKey(me.input.KEY.F5, "F5");
                me.event.unsubscribe(this.handler);
	}
});


