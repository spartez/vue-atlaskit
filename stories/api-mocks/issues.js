import faker from 'faker';
import { createPerson } from './people';
import { many } from './helpers';

export const priorities = [
    {
        self: 'https://jira.spartez.com/rest/api/2/priority/1',
        statusColor: '#cc0000',
        description: 'Blocks development and/or testing work, production could not run.',
        iconUrl: 'https://jira.spartez.com/images/icons/priorities/blocker.svg',
        name: 'Blocker',
        id: '1'
    },
    {
        self: 'https://jira.spartez.com/rest/api/2/priority/2',
        statusColor: '#ff0000',
        description: 'Crashes, loss of data, severe memory leak.',
        iconUrl: 'https://jira.spartez.com/images/icons/priorities/critical.svg',
        name: 'Critical',
        id: '2'
    },
    {
        self: 'https://jira.spartez.com/rest/api/2/priority/3',
        statusColor: '#009900',
        description: 'Major loss of function.',
        iconUrl: 'https://jira.spartez.com/images/icons/priorities/major.svg',
        name: 'Major',
        id: '3'
    },
    {
        self: 'https://jira.spartez.com/rest/api/2/priority/4',
        statusColor: '#006600',
        description: 'Minor loss of function, or other problem where easy workaround is present.',
        iconUrl: 'https://jira.spartez.com/images/icons/priorities/minor.svg',
        name: 'Minor',
        id: '4'
    },
    {
        self: 'https://jira.spartez.com/rest/api/2/priority/5',
        statusColor: '#003300',
        description: 'Cosmetic problem like misspelt words or misaligned text.',
        iconUrl: 'https://jira.spartez.com/images/icons/priorities/trivial.svg',
        name: 'Trivial',
        id: '5'
    }
];

export const types = [{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/1',
    id: '1',
    description: 'A problem which impairs or prevents the functions of the product.',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11163&avatarType=issuetype',
    name: 'Bug',
    subtask: false,
    avatarId: 11163
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/2',
    id: '2',
    description: 'Created by Jira Software - do not edit or delete. Issue type for a user story.',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11174&avatarType=issuetype',
    name: 'User Story',
    subtask: false,
    avatarId: 11174
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/3',
    id: '3',
    description: 'A task that needs to be done.',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11178&avatarType=issuetype',
    name: 'Task',
    subtask: false,
    avatarId: 11178
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/4',
    id: '4',
    description: '',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11170&avatarType=issuetype',
    name: 'Developer',
    subtask: false,
    avatarId: 11170
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/5',
    id: '5',
    description: '',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11170&avatarType=issuetype',
    name: 'Improvement',
    subtask: false,
    avatarId: 11170
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/6',
    id: '6',
    description: '',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11171&avatarType=issuetype',
    name: 'New Feature',
    subtask: false,
    avatarId: 11171
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/7',
    id: '7',
    description: 'The sub-task of the issue',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11176&avatarType=issuetype',
    name: 'Sub-task',
    subtask: true,
    avatarId: 11176
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/8',
    id: '8',
    description: 'Created by Jira Software - do not edit or delete. Issue type for a big user story that needs to be broken down.',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11167&avatarType=issuetype',
    name: 'Epic',
    subtask: false,
    avatarId: 11167
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/9',
    id: '9',
    description: 'A technical task.',
    iconUrl: 'https://jira.spartez.com/images/icons/issuetypes/task_agile.png',
    name: 'Technical task',
    subtask: true
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/10',
    id: '10',
    description: '',
    iconUrl: 'https://jira.spartez.com/secure/viewavatar?size=xsmall&avatarId=11174&avatarType=issuetype',
    name: 'Purchase',
    subtask: false,
    avatarId: 11174
},
{
    self: 'https://jira.spartez.com/rest/api/2/issuetype/11',
    id: '11',
    description: 'test',
    iconUrl: 'https://jira.spartez.com/images/icons/issuetypes/documentation.png',
    name: 'doc',
    subtask: false
}];

export const statuses = [
    {
        self: 'https://jira.spartez.com/rest/api/2/status/1',
        description: 'This Hypothesis was just created and is ready for further processing.',
        iconUrl: 'https://jira.spartez.com/images/icons/statuses/open.png',
        name: 'To-do',
        id: '1',
        statusCategory: {
            self: 'https://jira.spartez.com/rest/api/2/statuscategory/2',
            id: 2,
            key: 'new',
            colorName: 'blue-gray',
            name: 'To Do'
        }
    },
    {
        self: 'https://jira.spartez.com/rest/api/2/status/3',
        description: '',
        iconUrl: 'https://jira.spartez.com/images/icons/statuses/inprogress.png',
        name: 'In Progress',
        id: '3',
        statusCategory: {
            self: 'https://jira.spartez.com/rest/api/2/statuscategory/4',
            id: 4,
            key: 'indeterminate',
            colorName: 'yellow',
            name: 'In Progress'
        }
    },
    {
        self: 'https://jira.spartez.com/rest/api/2/status/4',
        description: 'This issue was once resolved, but the resolution was deemed incorrect. From here issues are either marked assigned or resolved.',
        iconUrl: 'https://jira.spartez.com/images/icons/statuses/reopened.png',
        name: 'Reopened',
        id: '4',
        statusCategory: {
            self: 'https://jira.spartez.com/rest/api/2/statuscategory/2',
            id: 2,
            key: 'new',
            colorName: 'blue-gray',
            name: 'To Do'
        }
    },
    {
        self: 'https://jira.spartez.com/rest/api/2/status/5',
        description: 'A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.',
        iconUrl: 'https://jira.spartez.com/images/icons/statuses/resolved.png',
        name: 'Resolved',
        id: '5',
        statusCategory: {
            self: 'https://jira.spartez.com/rest/api/2/statuscategory/3',
            id: 3,
            key: 'done',
            colorName: 'green',
            name: 'Done'
        }
    },
    {
        self: 'https://jira.spartez.com/rest/api/2/status/6',
        description: 'The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.',
        iconUrl: 'https://jira.spartez.com/images/icons/statuses/closed.png',
        name: 'Closed',
        id: '6',
        statusCategory: {
            self: 'https://jira.spartez.com/rest/api/2/statuscategory/3',
            id: 3,
            key: 'done',
            colorName: 'green',
            name: 'Done'
        }
    }
];

const randomKey = () => `${faker.hacker.abbreviation()}-${faker.random.number({ min: 1, max: 9999 })}`;

export const personToAssignee = person => ({
    name: person.key,
    key: person.key,
    avatarUrls: {
        '48x48': person.avatar
    },
    displayName: person.name
});

// eslint-disable-next-line
export const createIssue = ({ 
    key = randomKey(),
    summary = faker.lorem.sentence(),
    priority = faker.random.arrayElement(priorities),
    assignee = faker.random.boolean() ? personToAssignee(createPerson()) : undefined,
    status = faker.random.arrayElement(statuses),
    type = faker.random.arrayElement(types)
} = {}) => {
    const issue = {
        key,
        fields: {
            summary,
            priority,
            assignee,
            status,
            issuetype: type
        }
    };
    return issue;
};

export const createIssues = many(createIssue);
