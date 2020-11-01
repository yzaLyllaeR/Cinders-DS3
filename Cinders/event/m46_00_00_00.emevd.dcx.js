// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    // Arena Steup
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25000061)
    InitializeEvent(0, 14600000, 0);
    DeactivateGenerator(4609000, Disabled);
    
    // Trial of Calamity
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 25000061)
    SetEventFlag(25000061, OFF);
    SetMapCeremony(40, 0, 0);
    InitializeEvent(0, 14601000, 0);
    
    // Generators
    DeactivateGenerator(4609001, Disabled);
    DeactivateGenerator(4609002, Disabled);
    DeactivateGenerator(4609003, Disabled);
    DeactivateGenerator(4609004, Disabled);
    
    // Boss
    SetCharacterAnimationState(4600910, Disabled);
    ChangeCharacterEnableState(4600910, Disabled);
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 4600750); // Companion 1
    InitializeCommonEvent(20080000, 4600751); // Companion 2
    InitializeCommonEvent(20080000, 4600752); // Companion 3
    InitializeCommonEvent(20080000, 4600753); // Companion 4
    InitializeCommonEvent(20080000, 4600754); // Companion 5
    InitializeCommonEvent(20080000, 4600755); // Companion 6
    InitializeCommonEvent(20080000, 4600756); // Companion 7
    InitializeCommonEvent(20080000, 4600757); // Companion 8
    InitializeCommonEvent(20080000, 4600758); // Companion 9
    InitializeCommonEvent(20080000, 4600759); // Companion 10
    InitializeCommonEvent(20080000, 4600760); // Companion 11
    InitializeCommonEvent(20080000, 4600761); // Companion 12
    InitializeCommonEvent(20080000, 4600762); // Companion 13
    InitializeCommonEvent(20080000, 4600763); // Companion 14
    InitializeCommonEvent(20080000, 4600764); // Companion 15
    InitializeCommonEvent(20080000, 4600765); // Companion 16
    InitializeCommonEvent(20080000, 4600766); // Companion 17
    InitializeCommonEvent(20080000, 4600767); // Companion 18
    InitializeCommonEvent(20080000, 4600768); // Companion 19
    InitializeCommonEvent(20080000, 4600769); // Companion 20
    
    // Companion - Tools
    InitializeCommonEvent(20080002, 4600750); // Companion 1
    InitializeCommonEvent(20080002, 4600751); // Companion 2
    InitializeCommonEvent(20080002, 4600752); // Companion 3
    InitializeCommonEvent(20080002, 4600753); // Companion 4
    InitializeCommonEvent(20080002, 4600754); // Companion 5
    InitializeCommonEvent(20080002, 4600755); // Companion 6
    InitializeCommonEvent(20080002, 4600756); // Companion 7
    InitializeCommonEvent(20080002, 4600757); // Companion 8
    InitializeCommonEvent(20080002, 4600758); // Companion 9
    InitializeCommonEvent(20080002, 4600759); // Companion 10
    InitializeCommonEvent(20080002, 4600760); // Companion 11
    InitializeCommonEvent(20080002, 4600761); // Companion 12
    InitializeCommonEvent(20080002, 4600762); // Companion 13
    InitializeCommonEvent(20080002, 4600763); // Companion 14
    InitializeCommonEvent(20080002, 4600764); // Companion 15
    InitializeCommonEvent(20080002, 4600765); // Companion 16
    InitializeCommonEvent(20080002, 4600766); // Companion 17
    InitializeCommonEvent(20080002, 4600767); // Companion 18
    InitializeCommonEvent(20080002, 4600768); // Companion 19
    InitializeCommonEvent(20080002, 4600769); // Companion 20
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 46, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 4600750, 160760000, 160760200, 46, 0); // Companion 1
    InitializeCommonEvent(20080001, 4600751, 160760001, 160760200, 46, 0); // Companion 2
    InitializeCommonEvent(20080001, 4600752, 160760002, 160760200, 46, 0); // Companion 3
    InitializeCommonEvent(20080001, 4600753, 160760003, 160760200, 46, 0); // Companion 4
    InitializeCommonEvent(20080001, 4600754, 160760004, 160760200, 46, 0); // Companion 5
    InitializeCommonEvent(20080001, 4600755, 160760005, 160760200, 46, 0); // Companion 6
    InitializeCommonEvent(20080001, 4600756, 160760006, 160760200, 46, 0); // Companion 7
    InitializeCommonEvent(20080001, 4600757, 160760007, 160760200, 46, 0); // Companion 8
    InitializeCommonEvent(20080001, 4600758, 160760008, 160760200, 46, 0); // Companion 9
    InitializeCommonEvent(20080001, 4600759, 160760009, 160760200, 46, 0); // Companion 10
    InitializeCommonEvent(20080001, 4600760, 160760010, 160760200, 46, 0); // Companion 11
    InitializeCommonEvent(20080001, 4600761, 160760011, 160760200, 46, 0); // Companion 12
    InitializeCommonEvent(20080001, 4600762, 160760012, 160760200, 46, 0); // Companion 13
    InitializeCommonEvent(20080001, 4600763, 160760013, 160760200, 46, 0); // Companion 14
    InitializeCommonEvent(20080001, 4600764, 160760014, 160760200, 46, 0); // Companion 15
    InitializeCommonEvent(20080001, 4600765, 160760015, 160760200, 46, 0); // Companion 16
    InitializeCommonEvent(20080001, 4600766, 160760016, 160760200, 46, 0); // Companion 17
    InitializeCommonEvent(20080001, 4600767, 160760017, 160760200, 46, 0); // Companion 18
    InitializeCommonEvent(20080001, 4600768, 160760018, 160760200, 46, 0); // Companion 19
    InitializeCommonEvent(20080001, 4600769, 160760019, 160760200, 46, 0); // Companion 20
});

// Arena
Event(14600000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 14605300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 14605300);
    InitializeCommonEvent(20005941, 14605300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 14605300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 14605300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 14605300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 14605300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 14605300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 14605300);
});

// Trial
Event(14601000, Default, function() {
    InitializeEvent(0, 14601010, 0); // Trial
    InitializeEvent(0, 14601020, 0); // Setup Wave Entity
    InitializeEvent(0, 14601030, 0); // Setup Wave Damage
    InitializeEvent(0, 14601040, 0); // Setup Enemy Effects
});

// Trial
Event(14601010, Default, function() {
    WaitFixedTimeSeconds(5.0);
    
    // Wave 1 - Guardians of Lothric
    InitializeEvent(0, 14601011, 4609001, 260200300, 205020); 

    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500200);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 2 - Divine Knights of Gertrude
    InitializeEvent(0, 14601011, 4609002, 260200301, 205021); 

    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500210);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 3 - Gargoyle Frenzy
    InitializeEvent(0, 14601011, 4609003, 260200302, 205022); 

    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500220);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 4 - Crystalline Chaos
    InitializeEvent(0, 14601011, 4609004, 260200303, 205023); 

    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500230);
    
    WaitFixedTimeSeconds(10.0);
    
    // Boss - The Sorrowful Knight
    InitializeEvent(0, 14601012, 4600910, 260200304, 205024); 
    
    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500240);
    
    WaitFixedTimeSeconds(10.0);
    
    // Return
    WarpPlayer(40, 0, 4000970);
});

// Wave State - Wave
Event(14601011, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(4600900, X4_4);
    DisplayBossHealthBar(Enabled, 4600900, 0, X8_4);
    DeactivateGenerator(X0_4, Enabled);
    
    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, 4600900, 0, 905290);
    DeactivateGenerator(X0_4, Disabled);
    
    WaitFixedTimeSeconds(5.0);
});

// Wave State - Boss
Event(14601012, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(4600900, X4_4);
    DisplayBossHealthBar(Enabled, 4600900, 0, X8_4);
    
    SetCharacterAnimationState(X0_4, Enabled);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 280, 1060);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, X0_4, 0, 905290);
    
    WaitFixedTimeSeconds(5.0);
});

// Setup Wave Entity
Event(14601020, Default, function() {
    SetCharacterAIState(4600900, Disabled);
    SetCharacterGravity(4600900, Disabled);
    SetCharacterAnimationState(4600900, Disabled);
    SetLockOnPoint(4600900, 220, Disabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// Setup Wave Damage
Event(14601030, Default, function() {
    // Setup mechanics
    SkipIfCharacterHasSpeffect(3, 4605761, 260200010, true, ComparisonType.Equal, 1);
    CreateReferredDamagePair(4605761, 4600900); // Tie HP to Wave HP
    SetCharacterAIState(4605761, Enabled); // Enable AI
    SetSpeffect(4605761, 260200010);
    
    // Kill enemy if Wave is over
    IfCharacterHPRatio(AND_01, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetSpeffect(4605761, 260200002);

    EndUnconditionally(EventEndType.Restart);
});

// Setup Enemy Effects
Event(14601040, Default, function() {
    // Curses
    InitializeCommonEvent(20081010, 4605761, 250001020, 25000400); // Curse of Pride - 10%
    InitializeCommonEvent(20081010, 4605761, 250001021, 25000401); // Curse of Pride - 20%
    InitializeCommonEvent(20081010, 4605761, 250001022, 25000402); // Curse of Pride - 30%
    InitializeCommonEvent(20081010, 4605761, 250001023, 25000403); // Curse of Pride - 40%
    InitializeCommonEvent(20081010, 4605761, 250001024, 25000404); // Curse of Pride - 50%
    InitializeCommonEvent(20081010, 4605761, 250001025, 25000405); // Curse of Pride - 60%
    InitializeCommonEvent(20081010, 4605761, 250001026, 25000406); // Curse of Pride - 70%
    InitializeCommonEvent(20081010, 4605761, 250001027, 25000407); // Curse of Pride - 80%
    InitializeCommonEvent(20081010, 4605761, 250001028, 25000408); // Curse of Pride - 90%
    InitializeCommonEvent(20081010, 4605761, 250001029, 25000409); // Curse of Pride - 100%

    InitializeCommonEvent(20081010, 4605761, 250001120, 25000410); // Curse of Fortitude - 5%
    InitializeCommonEvent(20081010, 4605761, 250001121, 25000411); // Curse of Fortitude - 10%
    InitializeCommonEvent(20081010, 4605761, 250001122, 25000412); // Curse of Fortitude - 15%
    InitializeCommonEvent(20081010, 4605761, 250001123, 25000413); // Curse of Fortitude - 20%
    InitializeCommonEvent(20081010, 4605761, 250001124, 25000414); // Curse of Fortitude - 25%
    InitializeCommonEvent(20081010, 4605761, 250001125, 25000415); // Curse of Fortitude - 30%
    InitializeCommonEvent(20081010, 4605761, 250001126, 25000416); // Curse of Fortitude - 35%
    InitializeCommonEvent(20081010, 4605761, 250001127, 25000417); // Curse of Fortitude - 40%
    InitializeCommonEvent(20081010, 4605761, 250001128, 25000418); // Curse of Fortitude - 45%
    InitializeCommonEvent(20081010, 4605761, 250001129, 25000419); // Curse of Fortitude - 50%
    
    InitializeCommonEvent(20081010, 4605761, 250001320, 25000420); // Curse of Vitality - 10
    InitializeCommonEvent(20081010, 4605761, 250001321, 25000421); // Curse of Vitality - 20
    InitializeCommonEvent(20081010, 4605761, 250001322, 25000422); // Curse of Vitality - 30
    InitializeCommonEvent(20081010, 4605761, 250001323, 25000423); // Curse of Vitality - 40
    InitializeCommonEvent(20081010, 4605761, 250001324, 25000424); // Curse of Vitality - 50
    InitializeCommonEvent(20081010, 4605761, 250001325, 25000425); // Curse of Vitality - 60
    InitializeCommonEvent(20081010, 4605761, 250001326, 25000426); // Curse of Vitality - 70
    InitializeCommonEvent(20081010, 4605761, 250001327, 25000427); // Curse of Vitality - 80
    InitializeCommonEvent(20081010, 4605761, 250001328, 25000428); // Curse of Vitality - 90
    InitializeCommonEvent(20081010, 4605761, 250001329, 25000429); // Curse of Vitality - 100
    
    InitializeCommonEvent(20081010, 4605761, 250001420, 25000430); // Curse of Wrath - 10
    InitializeCommonEvent(20081010, 4605761, 250001421, 25000431); // Curse of Wrath - 20
    InitializeCommonEvent(20081010, 4605761, 250001422, 25000432); // Curse of Wrath - 30
    InitializeCommonEvent(20081010, 4605761, 250001423, 25000433); // Curse of Wrath - 40
    InitializeCommonEvent(20081010, 4605761, 250001424, 25000434); // Curse of Wrath - 50
    InitializeCommonEvent(20081010, 4605761, 250001425, 25000435); // Curse of Wrath - 60
    InitializeCommonEvent(20081010, 4605761, 250001426, 25000436); // Curse of Wrath - 70
    InitializeCommonEvent(20081010, 4605761, 250001427, 25000437); // Curse of Wrath - 80
    InitializeCommonEvent(20081010, 4605761, 250001428, 25000438); // Curse of Wrath - 90
    InitializeCommonEvent(20081010, 4605761, 250001429, 25000439); // Curse of Wrath - 100
    
    InitializeCommonEvent(20081000, 4605750, 25000440);             // Curse of Attraction
    InitializeCommonEvent(20081010, 4605761, 250001920, 25000480);  // Curse of Frailty
    InitializeCommonEvent(20081010, 4605770, 250002220, 25000510);  // Curse of Valor
    
    // Warp Monitor
    InitializeCommonEvent(20090200, 4605761);
    
    SetSpeffect(4605761, 260200390); // General Scaling

    EndUnconditionally(EventEndType.Restart);
});
