function captain_Demand(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

function captain_Encourage(tier)
{
   // DC of the Diplomacy check is 15; the DC for checks using other skills remains 10. 
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

function captain_Taunt(enemyTier)
{
   // DC is 15+1.5*enemyTier
   return (15 + Math.floor(1.5*enemyTier) );
}

function captain_Orders(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

function captain_MovingSpeech(tier)
{
   // DC is 20+1.5*tier
   return (20 + Math.floor(1.5*tier) );
}

function engineer_Divert(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

function engineer_HoldItTogether(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

function engineer_PatchGlitch(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

function engineer_PatchMalfunction(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

function engineer_PatchWrecked(tier)
{
   // DC is 20+1.5*tier
   return (20 + Math.floor(1.5*tier) );
}

function engineer_Overpower(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

function engineer_QuickFix(tier)
{
   // DC is 20+1.5*tier
   return (20 + Math.floor(1.5*tier) );
}

function pilot_BackOffStunt(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

function pilot_BarrelRollStunt(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

function pilot_EvadeStunt(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

function pilot_FlipAndBurnStunt(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

function pilot_FlyByStunt(tier)
{
   // DC is 15+1.5*tier
   return (15 + Math.floor(1.5*tier) );
}

function pilot_SlideStunt(tier)
{
   // DC is 10+1.5*(tier)
   return (10 + Math.floor(1.5*tier) );
}

function science_Balance(tier)
{
    // DC is 10+1.5*(tier)
    return (10 + Math.floor(1.5*tier) );
}

function science_Scan(enemy_tier, countermeasure_bonus)
{
    // DC is 5+1.5*(enemy_tier)+countermeasure_bonus
    return (5 + countermeasure_bonus + Math.floor(1.5*enemy_tier) );
}

function science_TargetSystem(enemy_tier, countermeasure_bonus)
{
    // DC is 5+1.5*(enemy_tier)+countermeasure_bonus
    return (5 + countermeasure_bonus + Math.floor(1.5*enemy_tier) );
}

function science_LockOn(enemy_tier, countermeasure_bonus)
{
    // DC is 5+1.5*(enemy_tier)+countermeasure_bonus
    return (5 + countermeasure_bonus + Math.floor(1.5*enemy_tier) );
}

function science_ImproveCountermeasures(enemy_tier, countermeasure_bonus)
{
    // DC is 5+1.5*(enemy_tier)+countermeasure_bonus
    return (5 + countermeasure_bonus + Math.floor(1.5*enemy_tier) );
}
