import { USyncQueryProtocol } from 'mod-baileys/lib/Types/USync';
import { BinaryNode } from 'mod-baileys/lib/WABinary';
export declare class USyncLIDProtocol implements USyncQueryProtocol {
    name: string;
    getQueryElement(): BinaryNode;
    getUserElement(): null;
    parser(node: BinaryNode): string | null;
}
