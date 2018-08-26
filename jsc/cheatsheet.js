var function captain_Demand(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

var function captain_Encourage(tier)
{
   // DC of the Diplomacy check is 15; the DC for checks using other skills remains 10. 
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

var function captain_Taunt(enemyTier)
{
   // DC is 15+1.5*enemyTier
   return (15 + Math.floor(1.5*enemyTier) );
}

var function captain_Orders(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

var function captain_MovingSpeech(tier)
{
   // DC is 20+1.5*tier
   return (20 + Math.floor(1.5*tier) );
}

var function engineer_Divert(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

var function engineer_HoldItTogether(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

var function engineer_PatchGlitch(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

var function engineer_PatchMalfunction(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

var function engineer_PatchWrecked(tier)
{
   // DC is 20+1.5*tier
   return (20 + Math.floor(1.5*tier) );
}

var function engineer_Overpower(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

var function engineer_QuickFix(tier)
{
   // DC is 20+1.5*tier
   return (20 + Math.floor(1.5*tier) );
}

var function pilot_BackOffStunt(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

var function pilot_BarrelRollStunt(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

var function pilot_EvadeStunt(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

var function pilot_FlipAndBurnStunt(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

var function pilot_FlyByStunt(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

var function pilot_SlideStunt(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

