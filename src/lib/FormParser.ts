import formidable, { IncomingForm } from 'formidable';
import { IncomingMessage } from 'http';

type ParseResult = {
  fields: formidable.Fields;
  files: formidable.Files;
};

export class FormParser {
  private readonly form;

  constructor(options: Partial<formidable.Options>) {
    this.form = new IncomingForm(options);
  }

  async parse(req: IncomingMessage): Promise<ParseResult> {
    return new Promise((resolve, reject) => {
      this.form.parse(req, (err, fields, files) =>
        err ? reject(err) : resolve({ fields, files }),
      );
    });
  }
}
