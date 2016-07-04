export default function query(node, selector=document) {
    return Array.from(selector.querySelectorAll(node));
}