
$('.black .overlay').click(function(){
    console.log(this);
    this.style.transition = 'all 2s ease';
    
    this.style.height = '100vh';
    this.style.width = '50vw';
    this.style.opacity = '1';
    this.style.position = 'fixed';
    this.style.background = 'rgba(0,0,0,1)';
    this.style.zIndex = '999';
});
$('.blue .overlay').click(function(){
    console.log(this);
    this.style.transition = 'all 2s ease';
    
    this.style.height = '100vh';
    this.style.width = '50vw';
    this.style.position = 'fixed';
    this.style.opacity = '1';
    this.style.background = 'rgba(0,203,255,1)';
    this.style.zIndex = '999';
});
$('.white .overlay').click(function(){
    console.log(this);
    this.style.transition = 'all 2s ease';
    
    this.style.height = '100vh';
    this.style.width = '50vw';
    this.style.opacity = '1';
    this.style.position = 'fixed';
    this.style.background = 'rgba(255,255,255,1)';
    this.style.zIndex = '999';
});

