# Stateful Multi Document Interface

Angular6 application demonstrating effective use REDUX pattern to implement multi document interface which allows users to work simultaneously in multiple opened views without losing state. Open Multiple application tabs inside same browser tab with maintained state with nearly no limit in opened tabs. 

## Application Details

This is a Dummy application trying to replicate a Bank, where user can view a list of Accounts and Applications submitted to the Bank. Each Account or application can be opened to a Application tab, for multi-tasking.

## What is MDI (Multi Document Interface)

Each Account and Application here is considered as a Document, where user may want to perform some operation like view/edit. But user may be interested to work on multiple such documents simultaneously. MDI suggest to open each Document as a new subtab in the application. These subtabs will be stateful, so that user can easily navigate between them and each operation/selection/form fill will be maintained for each document.

## Suggested Approach

1) Use REDUX (NGRX Store) to maintain state of each document.
2) On each document open, add a new application tab.
3) Implement different angular views for each Document types. (e.g. Accounts, Applications)
4) On document load, check in store if already have a state of Data. If Yes, Load it to the view. Else call        actual REST service for data.
5) On new view change, first update store with latest state of data, and then route.
6) Done! We have stateful MDIs implemented.

## Benefits with this Approach
1) Each MDI is a replication of tab. Internally there are different views implemented and at a time only one view (route) is loaded. This prevents from generating a lot of HTML.
2) As only state of Data is maintained, Application can have a huge no of simultaneous tabs opened.
3) Change in Tab is internally is an angular route, hence faster tab changes and no memory issues on having large no of opened tabs.
4) States of Tabs are maintained by NGRX store, Hence less coding and ease of implementation.
5) Immutable data structures.