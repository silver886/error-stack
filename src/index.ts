export class ErrorContext extends Error {
    public readonly name = 'ErrorContext';

    public readonly context: Record<string, unknown>;

    private readonly original: Error;

    public constructor(error: Error, context?: Record<string, unknown>) {
        super(error.message);
        super.name = error.name;
        super.stack = error.stack;
        this.original = error;
        this.context = context ?? {};
    }

    public get error(): Error {
        return this.original;
    }
}
