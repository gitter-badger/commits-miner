# Basic
Input project list (json)
Output
	JSON
Tasks
    [x] PMD metrics
# Todo
	[x] Paralelous processing of commits but a queue of commits cloning -> Done
	[x] Checkout a limited number of commits
        [x] Add a coordinator do the commits processing
		[x] Checkout n +1 commits while waiting for them to be processed
	[x] Implement output options and extentions
	[ ] Implement codesmells tasks
        [x] Callc code smells from the commit history
        [ ] Indentify start and end of code smells
	[x] Test
        [x] Fix the tests of Project analiser
    [x] Add post processor on the tasks
    [x] Add a mult project command line option to run in serie
    [x] Add a progress log log the % of commits procesed already 
    [ ] Create the command-line tool documentation
    [ ] Create the language agnostic task executor
    [ ] Create a demo video how to use the tool with node and with another language
    [ ] Check fatal when project do not exists
    [x] Finish the commits page
    [ ] Improve UI (check https://www.muicss.com/docs/v1/react/forms)
        [ ] Improve updateProjectState method on Home screen (sort of a requests overflow)
    [ ] Restore processing after failure
    [ ] Reduces data trafic of the commits check
    [ ] Pretty good citation https://dibt.unimol.it/staff/fpalomba/documents/C4.pdf
    [ ] Find tool to check code metrics
    [ ] Add a tool in hava for https://github.com/mauricioaniche/ck
    [ ] Add a start end filter on commits miner
    [ ] Add a timeou on the tasks
    [ ] Add feature to remove projects from list