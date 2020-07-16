import Bold from './custom-extensions/marks/Bold';
import Italic from './custom-extensions/marks/Italic';
import Strike from './custom-extensions/marks/Strike';
import Code from './custom-extensions/marks/Code';
import Underline from './custom-extensions/marks/Underline';
import Indentation from './custom-extensions/marks/Indentation';
import Alignment from './custom-extensions/marks/Alignment';
import TextColor from './custom-extensions/marks/TextColor';
import Breakout from './custom-extensions/marks/Breakout';
import ConfluenceInlineComments from './custom-extensions/marks/ConfluenceInlineComments';
import SubSup from './custom-extensions/marks/SubSup';
import Link from './custom-extensions/marks/Link';
import Annotation from './custom-extensions/marks/Annotation';
import TypeAheadQuery from './custom-extensions/marks/TypeAheadQuery';


import Date from './custom-extensions/nodes/Date';
import BulletList from './custom-extensions/nodes/BulletList';
import OrderedList from './custom-extensions/nodes/OrderedList';
import ListItem from './custom-extensions/nodes/ListItem';
import MediaSingle from './custom-extensions/nodes/MediaSingle';
import CodeBlock from './custom-extensions/nodes/CodeBlock';
import Media from './custom-extensions/nodes/Media';
import Panel from './custom-extensions/nodes/Panel';
import BlockCard from './custom-extensions/nodes/BlockCard';
import Status from './custom-extensions/nodes/Status';
import Blockquote from './custom-extensions/nodes/Blockqoute';
import BodiedExtension from './custom-extensions/nodes/BodiedExtension';
import Emoji from './custom-extensions/nodes/Emoji';
import LayoutColumn from './custom-extensions/nodes/LayoutColumn';
import TableCell from './custom-extensions/nodes/TableCell';
import TableRow from './custom-extensions/nodes/TableRow';
import Table from './custom-extensions/nodes/Table';
import TableHeader from './custom-extensions/nodes/TableHeader';
import TaskItem from './custom-extensions/nodes/TaskItem';
import TaskList from './custom-extensions/nodes/TaskList';
import LayoutSection from './custom-extensions/nodes/LayoutSection';
import Heading from './custom-extensions/nodes/Heading';
import HardBreak from './custom-extensions/nodes/HardBreak';
import DecisionList from './custom-extensions/nodes/DecisionList';
import DecisionItem from './custom-extensions/nodes/DecisionItem';
import Image from './custom-extensions/nodes/Image';
import Rule from './custom-extensions/nodes/Rule';
import MediaGroup from './custom-extensions/nodes/MediaGroup';
import EmbedCard from './custom-extensions/nodes/EmbedCard';
import Extension from './custom-extensions/nodes/Extension';
import NestedExpand from './custom-extensions/nodes/NestedExpand';
import Unsupportedblock from './custom-extensions/nodes/Unsupportedblock';
import Mention from './custom-extensions/nodes/Mention';
import Paragraph from './custom-extensions/nodes/Paragraph';
import Text from './custom-extensions/nodes/Text';
import Doc from './custom-extensions/nodes/Doc';
import Placeholder from './custom-extensions/nodes/Placeholder';
import InlineCard from './custom-extensions/nodes/InlineCard';

import History from './custom-extensions/extensions/History';

export { Placeholder };

export const extensions = [
    new Doc(),
    new Indentation(),
    new Paragraph(),
    new Text(),
    new TextColor(),
    new CodeBlock(),
    new Heading({ levels: [1, 2, 3] }),
    new ListItem(),
    new OrderedList(),
    new Link(),
    new Bold(),
    new Code(),
    new Italic(),
    new Strike(),
    new Underline(),
    new Table(),
    new TableCell(),
    new TableHeader(),
    new TableRow(),
    new Alignment(),
    new Status(),
    new Annotation(),
    new Date(),
    new BulletList(),
    new MediaSingle(),
    new Media(),
    new Breakout(),
    new Panel(),
    new BlockCard(),
    new ConfluenceInlineComments(),
    new SubSup(),
    new Link(),
    new TypeAheadQuery(),
    new Blockquote(),
    new Emoji(),
    new LayoutColumn(),
    new TableCell(),
    new TableRow(),
    new TaskItem(),
    new TaskList(),
    new LayoutSection(),
    new BodiedExtension(),
    new HardBreak(),
    new DecisionList(),
    new DecisionItem(),
    new Image(),
    new Rule(),
    new MediaGroup(),
    new EmbedCard(),
    new Extension(),
    new NestedExpand(),
    new Unsupportedblock(),
    new Mention(),
    new InlineCard(),
    new History()
];
